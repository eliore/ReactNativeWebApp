"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_native_1 = require("react-native");
// @ts-ignore
const app_json_1 = require("./app.json");
const App_1 = __importDefault(require("./App"));
react_native_1.AppRegistry.registerComponent(app_json_1.name, () => App_1.default);
react_native_1.AppRegistry.runApplication(app_json_1.name, {
    initialProps: {},
    rootTag: document.getElementById("app-root"),
});
