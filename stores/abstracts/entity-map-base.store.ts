import assign from "lodash/assign";
import concat from "lodash/concat";
import filter from "lodash/filter";
import find from "lodash/find";
import flatten from "lodash/flatten";
import groupBy from "lodash/groupBy";
import isArray from "lodash/isArray";
import isObject from "lodash/isObject";
import map from "lodash/map";
import values from "lodash/values";
import { action, computed, observable } from "mobx";

import { IEntityMapBaseStore } from "typescript/abstracts/store.types";
import { hasChangesByFields } from "utils/mobx.utils";

import { IApi } from "api/api";

export const initialData = {
  map: {},
  selectedId: null
};

class EntityMapBaseStore<T extends { id: number }>
  implements IEntityMapBaseStore<T> {
  API: IApi | any;
  options: {
    entityName?: string;
    apiServerName?: string;
    authType?: string;
    groupByField?: string;
    defaultValues?: (entity: T) => T;
    compareFields?: string[];
  };

  @observable map: Record<number | string, T[]> = initialData.map;
  @observable selectedId: number | null = initialData.selectedId;

  constructor({ API, options = {} }: Partial<IEntityMapBaseStore<T>>) {
    this.API = API;
    this.options = options;

    this.initialAll = this.initialAll.bind(this);
  }

  initialAll() {
    this.select();
    this.setCollection();
  }

  @computed
  get getList() {
    return flatten(values(this.map));
  }

  @computed
  get selected(): T | null {
    return find(this.getList, e => e.id === this.selectedId) || null;
  }

  @action.bound
  select(id: number | null = null) {
    this.selectedId = id || null;
  }

  @action.bound
  clearSelected() {
    this.select();
  }

  @action.bound
  setCollection(data: T[] | Record<number | string, T[]> = {}) {
    let mapData;

    if (isArray(data)) {
      const array = this.options.defaultValues
        ? map(data as T[], this.options.defaultValues)
        : data || [];

      mapData = groupBy(array, this.options.groupByField);
    } else if (isObject(data)) {
      mapData = data;
    }

    this.map = (mapData as Record<number | string, T[]>);
  }

  @action.bound
  updateCollection(data: T[] | Record<number | string, T[]>) {
    let mapData;

    if (isArray(data)) {
      const array = this.options.defaultValues
        ? map(data as T[], this.options.defaultValues)
        : data || [];

      mapData = groupBy(array, this.options.groupByField);
    } else if (isObject(data)) {
      mapData = data;
    }

    this.map = assign({}, this.map, mapData);
  }

  @action.bound
  async fetchAll(params: any = {}) {
    try {
      const paramsWithApi = {
        apiServerName: this.options.apiServerName,
        authType: this.options.authType,
        ...params
      };

      const response = await this.API[`fetch${this.options.entityName}s`](
        paramsWithApi
      );

      this.setCollection(response);

      return { response, success: true };
    } catch (error) {
      return { ...error, success: false };
    }
  }

  @action.bound
  async fetchById(id: number, params: any = {}) {
    try {
      const paramsWithApi = {
        apiServerName: this.options.apiServerName,
        authType: this.options.authType,
        ...params
      };

      const response = await this.API[`fetch${this.options.entityName}`](
        id,
        paramsWithApi
      );

      if (response && response.id && this.options?.groupByField) {
        const oldEntity = find(
          this.map[response[this.options?.groupByField]],
          e => e.id === response.id
        );

        if (
          !oldEntity ||
          !this.options.compareFields ||
          hasChangesByFields(oldEntity, response, this.options.compareFields)
        ) {
          const newEntity = this.options.defaultValues
            ? this.options.defaultValues(response)
            : response;

          this.updateCollection(
            concat(
              filter(
                this.map[newEntity[this.options.groupByField]] || [],
                entity => entity.id !== response.id
              ),
              [newEntity]
            )
          );
        }
      }

      return { response, success: true };
    } catch (error) {
      return { ...error, success: false };
    }
  }
}

export default EntityMapBaseStore;
