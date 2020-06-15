import concat from "lodash/concat";
import filter from "lodash/filter";
import find from "lodash/find";
import map from "lodash/map";
import { action, computed, observable } from "mobx";

import { IEntityListBaseStore } from "typescript/abstracts/store.types";
import { hasChangesByFields } from "utils/mobx.utils";
import { arrayToMap } from "utils/utils";

import { IApi } from "api/api";

export const initialData = {
  list: [],
  selectedId: null
};

class EntityListBaseStore<T extends { id: number }>
  implements IEntityListBaseStore<T> {
  API: IApi | any;
  options: {
    entityName?: string;
    apiServerName?: string;
    authType?: string;
    listName?: string;
    defaultValues?: (entity: T) => T;
    compareFields?: string[];
  };

  @observable list: T[] = initialData.list;
  @observable selectedId: number | null = initialData.selectedId;

  constructor({ API, options = {} }: Partial<IEntityListBaseStore<T>>) {
    this.API = API;
    this.options = options;

    this.initialAll = this.initialAll.bind(this);
  }

  initialAll() {
    this.select();
    this.setCollection();
  }

  @computed
  get selected(): T | null {
    return find(this.list, e => e.id === this.selectedId) || null;
  }

  @computed
  get getMapById() {
    return arrayToMap(this.list);
  }

  @action.bound
  setCollection(list: T[] = []) {
    this.list = this.options.defaultValues
      ? map(list, this.options.defaultValues)
      : list;
  }

  @action.bound
  updateCollection(list: T[]) {
    const mapList = arrayToMap(list);

    this.list = concat(
      filter(this.list, e => !mapList[e.id]),
      this.options.defaultValues ? map(list, this.options.defaultValues) : list
    );
  }

  @action.bound
  select(id: number | null = null) {
    this.selectedId = id || null;
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

      this.setCollection(
        this.options.listName ? response[this.options.listName] : response
      );

      return { response, success: true };
    } catch (error) {
      return { ...error, success: false };
    }
  }

  @action.bound
  clearSelected() {
    this.select();
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

      if (
        !this.options.compareFields ||
        hasChangesByFields(
          this.getMapById[response.id],
          response,
          this.options.compareFields
        )
      ) {
        this.updateCollection([
          this.options.defaultValues
            ? this.options.defaultValues(response)
            : response
        ]);
      }

      return { response, success: true };
    } catch (error) {
      return { ...error, success: false };
    }
  }
}

export default EntityListBaseStore;
