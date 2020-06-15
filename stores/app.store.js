"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const app_store_1 = __importDefault(require("stores/abstracts/app.store"));
const auth_user_store_1 = __importDefault(require("stores/auth-user.store"));
const common_view_store_1 = __importDefault(require("view-stores/common.view.store"));
const api_1 = require("../api");
class AppStore extends app_store_1.default {
    constructor(params) {
        super(params);
        this.viewStores = {};
        this.stores = {};
        const commonViewStore = new common_view_store_1.default();
        this.viewStores = {
            commonViewStore
        };
    }
}
exports.default = new AppStore({
    API: api_1.getAPI(),
    authUserStore: auth_user_store_1.default
});
