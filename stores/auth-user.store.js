"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const auth_user_store_1 = __importDefault(require("stores/abstracts/auth-user.store"));
const api_1 = require("../api");
const USER_STORAGE_KEY = "USER_KEY";
const DEFAULT_SETTINGS = {};
class AuthUserStore extends auth_user_store_1.default {
    constructor(params) {
        super(params);
    }
}
exports.default = new AuthUserStore({
    API: api_1.getAPI(),
    options: {
        auth_storage_key: USER_STORAGE_KEY,
        default_settings: DEFAULT_SETTINGS
    }
});
