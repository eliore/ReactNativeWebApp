"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.initialData = void 0;
const assign_1 = __importDefault(require("lodash/assign"));
const concat_1 = __importDefault(require("lodash/concat"));
const filter_1 = __importDefault(require("lodash/filter"));
const find_1 = __importDefault(require("lodash/find"));
const flatten_1 = __importDefault(require("lodash/flatten"));
const groupBy_1 = __importDefault(require("lodash/groupBy"));
const isArray_1 = __importDefault(require("lodash/isArray"));
const isObject_1 = __importDefault(require("lodash/isObject"));
const map_1 = __importDefault(require("lodash/map"));
const values_1 = __importDefault(require("lodash/values"));
const mobx_1 = require("mobx");
const mobx_utils_1 = require("utils/mobx.utils");
exports.initialData = {
    map: {},
    selectedId: null
};
class EntityMapBaseStore {
    constructor({ API, options = {} }) {
        this.map = exports.initialData.map;
        this.selectedId = exports.initialData.selectedId;
        this.API = API;
        this.options = options;
        this.initialAll = this.initialAll.bind(this);
    }
    initialAll() {
        this.select();
        this.setCollection();
    }
    get getList() {
        return flatten_1.default(values_1.default(this.map));
    }
    get selected() {
        return find_1.default(this.getList, e => e.id === this.selectedId) || null;
    }
    select(id = null) {
        this.selectedId = id || null;
    }
    clearSelected() {
        this.select();
    }
    setCollection(data = {}) {
        let mapData;
        if (isArray_1.default(data)) {
            const array = this.options.defaultValues
                ? map_1.default(data, this.options.defaultValues)
                : data || [];
            mapData = groupBy_1.default(array, this.options.groupByField);
        }
        else if (isObject_1.default(data)) {
            mapData = data;
        }
        this.map = mapData;
    }
    updateCollection(data) {
        let mapData;
        if (isArray_1.default(data)) {
            const array = this.options.defaultValues
                ? map_1.default(data, this.options.defaultValues)
                : data || [];
            mapData = groupBy_1.default(array, this.options.groupByField);
        }
        else if (isObject_1.default(data)) {
            mapData = data;
        }
        this.map = assign_1.default({}, this.map, mapData);
    }
    async fetchAll(params = {}) {
        try {
            const paramsWithApi = {
                apiServerName: this.options.apiServerName,
                authType: this.options.authType,
                ...params
            };
            const response = await this.API[`fetch${this.options.entityName}s`](paramsWithApi);
            this.setCollection(response);
            return { response, success: true };
        }
        catch (error) {
            return { ...error, success: false };
        }
    }
    async fetchById(id, params = {}) {
        try {
            const paramsWithApi = {
                apiServerName: this.options.apiServerName,
                authType: this.options.authType,
                ...params
            };
            const response = await this.API[`fetch${this.options.entityName}`](id, paramsWithApi);
            if (response && response.id && this.options?.groupByField) {
                const oldEntity = find_1.default(this.map[response[this.options?.groupByField]], e => e.id === response.id);
                if (!oldEntity ||
                    !this.options.compareFields ||
                    mobx_utils_1.hasChangesByFields(oldEntity, response, this.options.compareFields)) {
                    const newEntity = this.options.defaultValues
                        ? this.options.defaultValues(response)
                        : response;
                    this.updateCollection(concat_1.default(filter_1.default(this.map[newEntity[this.options.groupByField]] || [], entity => entity.id !== response.id), [newEntity]));
                }
            }
            return { response, success: true };
        }
        catch (error) {
            return { ...error, success: false };
        }
    }
}
__decorate([
    mobx_1.observable
], EntityMapBaseStore.prototype, "map", void 0);
__decorate([
    mobx_1.observable
], EntityMapBaseStore.prototype, "selectedId", void 0);
__decorate([
    mobx_1.computed
], EntityMapBaseStore.prototype, "getList", null);
__decorate([
    mobx_1.computed
], EntityMapBaseStore.prototype, "selected", null);
__decorate([
    mobx_1.action.bound
], EntityMapBaseStore.prototype, "select", null);
__decorate([
    mobx_1.action.bound
], EntityMapBaseStore.prototype, "clearSelected", null);
__decorate([
    mobx_1.action.bound
], EntityMapBaseStore.prototype, "setCollection", null);
__decorate([
    mobx_1.action.bound
], EntityMapBaseStore.prototype, "updateCollection", null);
__decorate([
    mobx_1.action.bound
], EntityMapBaseStore.prototype, "fetchAll", null);
__decorate([
    mobx_1.action.bound
], EntityMapBaseStore.prototype, "fetchById", null);
exports.default = EntityMapBaseStore;
