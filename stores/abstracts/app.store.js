"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const types_constants_1 = require("constants/types.constants");
const mobx_1 = require("mobx");
const defaultInitialResources = [];
class AppStore {
    constructor({ API, authUserStore, stores = {}, options = { initialResources: defaultInitialResources } }) {
        this.stores = {};
        this.fetchState = null;
        this.lastUpdated = null;
        this.appRefreshing = false;
        this.API = API;
        this.authUserStore = authUserStore;
        this.stores = stores;
        this.options = options;
    }
    setAppRefreshState(isRefreshing = false) {
        this.appRefreshing = isRefreshing;
    }
    async fetchInitial(refresh, resources = this.options.initialResources || [], functionName = "fetchAll", functionParameter) {
        if (!refresh) {
            this.fetchState = types_constants_1.FETCH_STATES.PENDING;
        }
        try {
            const results = await Promise.all(resources.map(resource => {
                return this.stores[`${resource}Store`][functionName](functionParameter);
            }));
            mobx_1.runInAction(() => {
                if (functionName === "fetchAll") {
                    this.lastUpdated = new Date();
                }
                if (!refresh) {
                    this.fetchState = types_constants_1.FETCH_STATES.DONE;
                }
            });
            return results;
        }
        catch (error) {
            console.log("Failed to fetch initial data", error);
            if (!refresh) {
                mobx_1.runInAction(() => {
                    this.fetchState = types_constants_1.FETCH_STATES.ERROR;
                });
            }
            return error;
        }
    }
    appSignOut(resources = this.options.initialResources || []) {
        resources.reverse().map(resource => {
            return this.stores[`${resource}Store`].initialAll();
        });
        if (this.authUserStore) {
            this.authUserStore.signOut();
        }
    }
}
__decorate([
    mobx_1.observable
], AppStore.prototype, "fetchState", void 0);
__decorate([
    mobx_1.observable
], AppStore.prototype, "lastUpdated", void 0);
__decorate([
    mobx_1.observable
], AppStore.prototype, "appRefreshing", void 0);
__decorate([
    mobx_1.action.bound
], AppStore.prototype, "setAppRefreshState", null);
__decorate([
    mobx_1.action.bound
], AppStore.prototype, "fetchInitial", null);
__decorate([
    mobx_1.action.bound
], AppStore.prototype, "appSignOut", null);
exports.default = AppStore;
