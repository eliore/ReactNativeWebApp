"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAPI = exports.LocalAPI = exports.fetchUrl = void 0;
const api_1 = require("api/api");
const fetch_utils_1 = require("utils/fetch.utils");
const api_config_1 = require("config/api.config");
const auth_user_store_1 = __importDefault(require("stores/auth-user.store"));
function fetchUrl({ url, method, params, authType }) {
    return fetch_utils_1.fetchUrl({
        url,
        method,
        params,
        baseUrl: "",
        authToken: auth_user_store_1.default.authToken,
        jwtToken: auth_user_store_1.default.jwtToken,
        authType
    });
}
exports.fetchUrl = fetchUrl;
class LocalAPI {
}
exports.LocalAPI = LocalAPI;
function getAPI() {
    return api_1.getAPI(api_config_1.API_ENDPOINTS, api_config_1.ENDPOINT_NAMES, api_config_1.IS_NOT_MOCK, fetchUrl);
}
exports.getAPI = getAPI;
exports.default = getAPI();
