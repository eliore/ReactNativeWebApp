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
const concat_1 = __importDefault(require("lodash/concat"));
const filter_1 = __importDefault(require("lodash/filter"));
const find_1 = __importDefault(require("lodash/find"));
const map_1 = __importDefault(require("lodash/map"));
const mobx_1 = require("mobx");
const mobx_utils_1 = require("utils/mobx.utils");
const utils_1 = require("utils/utils");
exports.initialData = {
    list: [],
    selectedId: null
};
class EntityListBaseStore {
    constructor({ API, options = {} }) {
        this.list = exports.initialData.list;
        this.selectedId = exports.initialData.selectedId;
        this.API = API;
        this.options = options;
        this.initialAll = this.initialAll.bind(this);
    }
    initialAll() {
        this.select();
        this.setCollection();
    }
    get selected() {
        return find_1.default(this.list, e => e.id === this.selectedId) || null;
    }
    get getMapById() {
        return utils_1.arrayToMap(this.list);
    }
    setCollection(list = []) {
        this.list = this.options.defaultValues
            ? map_1.default(list, this.options.defaultValues)
            : list;
    }
    updateCollection(list) {
        const mapList = utils_1.arrayToMap(list);
        this.list = concat_1.default(filter_1.default(this.list, e => !mapList[e.id]), this.options.defaultValues ? map_1.default(list, this.options.defaultValues) : list);
    }
    select(id = null) {
        this.selectedId = id || null;
    }
    async fetchAll(params = {}) {
        try {
            const paramsWithApi = {
                apiServerName: this.options.apiServerName,
                authType: this.options.authType,
                ...params
            };
            const response = await this.API[`fetch${this.options.entityName}s`](paramsWithApi);
            this.setCollection(this.options.listName ? response[this.options.listName] : response);
            return { response, success: true };
        }
        catch (error) {
            return { ...error, success: false };
        }
    }
    clearSelected() {
        this.select();
    }
    async fetchById(id, params = {}) {
        try {
            const paramsWithApi = {
                apiServerName: this.options.apiServerName,
                authType: this.options.authType,
                ...params
            };
            const response = await this.API[`fetch${this.options.entityName}`](id, paramsWithApi);
            if (!this.options.compareFields ||
                mobx_utils_1.hasChangesByFields(this.getMapById[response.id], response, this.options.compareFields)) {
                this.updateCollection([
                    this.options.defaultValues
                        ? this.options.defaultValues(response)
                        : response
                ]);
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
], EntityListBaseStore.prototype, "list", void 0);
__decorate([
    mobx_1.observable
], EntityListBaseStore.prototype, "selectedId", void 0);
__decorate([
    mobx_1.computed
], EntityListBaseStore.prototype, "selected", null);
__decorate([
    mobx_1.computed
], EntityListBaseStore.prototype, "getMapById", null);
__decorate([
    mobx_1.action.bound
], EntityListBaseStore.prototype, "setCollection", null);
__decorate([
    mobx_1.action.bound
], EntityListBaseStore.prototype, "updateCollection", null);
__decorate([
    mobx_1.action.bound
], EntityListBaseStore.prototype, "select", null);
__decorate([
    mobx_1.action.bound
], EntityListBaseStore.prototype, "fetchAll", null);
__decorate([
    mobx_1.action.bound
], EntityListBaseStore.prototype, "clearSelected", null);
__decorate([
    mobx_1.action.bound
], EntityListBaseStore.prototype, "fetchById", null);
exports.default = EntityListBaseStore;
