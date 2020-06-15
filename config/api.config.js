"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.API_ENDPOINTS = exports.ENDPOINT_NAMES = exports.APP_DEMO_BASE_URL = exports.APP_BASE_URL = exports.API_VERSION = exports.IS_NOT_MOCK = void 0;
const api_constants_1 = require("constants/api.constants");
const DEMO_API_BASE_URL = "";
// @ts-ignore
const app_json_1 = require("../app.json");
const API_BASE_URL = app_json_1.apiMode === api_constants_1.API_MODES.DEMO ? DEMO_API_BASE_URL : api_constants_1.API_BASE_URL[app_json_1.apiMode];
exports.IS_NOT_MOCK = app_json_1.apiMode !== api_constants_1.API_MODES.MOCK;
exports.API_VERSION = exports.IS_NOT_MOCK ? "/v1" : "";
const API_NAME = "/";
exports.APP_BASE_URL = `${API_BASE_URL}${exports.IS_NOT_MOCK ? `/api${exports.API_VERSION}${API_NAME}` : ""}`;
exports.APP_DEMO_BASE_URL = `${DEMO_API_BASE_URL}${exports.IS_NOT_MOCK ? `/api${exports.API_VERSION}${API_NAME}` : ""}`;
exports.ENDPOINT_NAMES = {
    GENERAL_SERVER: { name: "general_server", path: "" },
    NODE: { name: "node", path: "" },
    USERS: { name: "users", path: "/users" },
};
exports.API_ENDPOINTS = {
    [exports.ENDPOINT_NAMES.GENERAL_SERVER.name]: app_json_1.apiMode === api_constants_1.API_MODES.MOCK
        ? api_constants_1.API_BASE_URL[api_constants_1.API_MODES.STAGING]
        : API_BASE_URL,
    [exports.ENDPOINT_NAMES.NODE.name]: `${exports.APP_BASE_URL}${exports.ENDPOINT_NAMES.NODE.path}`,
    [exports.ENDPOINT_NAMES.USERS.name]: `${app_json_1.apiMode === api_constants_1.API_MODES.MOCK
        ? api_constants_1.API_BASE_URL[api_constants_1.API_MODES.STAGING]
        : API_BASE_URL}${exports.ENDPOINT_NAMES.USERS.path}`
};
