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
const mobx_1 = require("mobx");
const async_storage_utils_1 = __importDefault(require("utils/async-storage.utils"));
exports.initialData = {
    authUser: null,
    loginError: false,
    pendingLogin: true,
    loginStatus: "idle"
};
class AuthUserStore {
    constructor({ API, options = {} }) {
        this.authUser = exports.initialData.authUser;
        this.loginError = exports.initialData.loginError;
        this.loginStatus = exports.initialData.loginStatus;
        this.pendingLogin = exports.initialData.pendingLogin;
        this.API = API;
        this.options = options;
        this.initFromLocalStorage();
        this.getUserObject = this.getUserObject.bind(this);
    }
    getUserObject(response, isLogin = true) {
        const oldUser = this.authUser || {};
        const { user } = response;
        const authUser = {
            first_name: user.first_name,
            last_name: user.last_name,
            role: user.role,
            company_name: user.company_name,
            id: user.id,
            email: user.email,
            metric_units: !!user.metric_units,
            jwt_token: user.jwt_token ? user.jwt_token : oldUser.jwt_token,
            authentication_token: isLogin
                ? response.api_token
                : user.authentication_token || oldUser.authentication_token || "",
            settings: response.settings || this.options.default_settings
        };
        return authUser;
    }
    get signedIn() {
        return !!(this.authUser && this.authUser.authentication_token);
    }
    get authToken() {
        return this.authUser ? this.authUser.authentication_token : "";
    }
    get jwtToken() {
        return this.authUser ? this.authUser.jwt_token : "";
    }
    get settings() {
        return this.authUser
            ? this.authUser.settings || this.options.default_settings
            : this.options.default_settings;
    }
    async initFromLocalStorage() {
        let AsyncStorage;
        try {
            AsyncStorage = new async_storage_utils_1.default(this.options.auth_storage_key || "");
            const authUser = await AsyncStorage.getItem().then((userJson) => (userJson ? JSON.parse(userJson) : null));
            if (authUser) {
                authUser.settings = authUser.settings || this.options.default_settings;
                this.autoSignIn();
            }
            mobx_1.runInAction(() => {
                this.authUser = authUser;
                this.pendingLogin = false;
            });
        }
        catch (e) {
            return null;
        }
        finally {
            AsyncStorage = null;
        }
    }
    async signIn(email, password) {
        let AsyncStorage;
        let result = null;
        this.loginError = false;
        this.loginStatus = "pending";
        try {
            AsyncStorage = new async_storage_utils_1.default(this.options.auth_storage_key || "");
            const response = await this.API.login(email, password);
            const authUser = this.getUserObject(response);
            mobx_1.runInAction(() => {
                this.authUser = authUser;
                this.pendingLogin = false;
                this.loginStatus = "confirm";
            });
            AsyncStorage.setItem(JSON.stringify(this.authUser));
            result = authUser;
        }
        catch (error) {
            mobx_1.runInAction(() => {
                this.authUser = null;
                this.loginError = true;
                this.loginStatus = "idle";
            });
        }
        finally {
            AsyncStorage = null;
        }
        return result;
    }
    async autoSignIn() {
        let AsyncStorage;
        let result = null;
        try {
            AsyncStorage = new async_storage_utils_1.default(this.options.auth_storage_key || "");
            const response = await this.API.autoLogin();
            const authUser = this.getUserObject(response, false);
            mobx_1.runInAction(() => {
                this.authUser = authUser;
            });
            AsyncStorage.setItem(JSON.stringify(this.authUser));
            result = authUser;
        }
        catch (error) { }
        finally {
            AsyncStorage = null;
        }
        return result;
    }
    async signOut() {
        let AsyncStorage;
        let result = null;
        try {
            AsyncStorage = new async_storage_utils_1.default(this.options.auth_storage_key || "");
            await AsyncStorage.removeItem();
            mobx_1.runInAction(() => {
                this.authUser = null;
                this.loginStatus = "idle";
            });
            result = true;
        }
        catch (e) { }
        finally {
            AsyncStorage = null;
        }
        return result;
    }
}
__decorate([
    mobx_1.observable
], AuthUserStore.prototype, "authUser", void 0);
__decorate([
    mobx_1.observable
], AuthUserStore.prototype, "loginError", void 0);
__decorate([
    mobx_1.observable
], AuthUserStore.prototype, "loginStatus", void 0);
__decorate([
    mobx_1.observable
], AuthUserStore.prototype, "pendingLogin", void 0);
__decorate([
    mobx_1.computed
], AuthUserStore.prototype, "signedIn", null);
__decorate([
    mobx_1.computed
], AuthUserStore.prototype, "authToken", null);
__decorate([
    mobx_1.computed
], AuthUserStore.prototype, "jwtToken", null);
__decorate([
    mobx_1.computed
], AuthUserStore.prototype, "settings", null);
__decorate([
    mobx_1.action.bound
], AuthUserStore.prototype, "initFromLocalStorage", null);
__decorate([
    mobx_1.action.bound
], AuthUserStore.prototype, "signIn", null);
__decorate([
    mobx_1.action.bound
], AuthUserStore.prototype, "autoSignIn", null);
__decorate([
    mobx_1.action.bound
], AuthUserStore.prototype, "signOut", null);
exports.default = AuthUserStore;
