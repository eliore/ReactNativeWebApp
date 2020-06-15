"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.API_BASE_URL = exports.API_MODES = void 0;
exports.API_MODES = {
    PRODUCTION: "prod",
    STAGING: "dev",
    DEMO: "demo",
    MOCK: "mock"
};
exports.API_BASE_URL = {
    [exports.API_MODES.PRODUCTION]: "",
    [exports.API_MODES.STAGING]: "",
    [exports.API_MODES.DEMO]: "",
    [exports.API_MODES.MOCK]: "https://api.myjson.com/bins"
};
