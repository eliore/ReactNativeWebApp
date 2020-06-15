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
const mobx_react_1 = require("mobx-react");
const react_1 = __importDefault(require("react"));
const react_native_1 = require("react-native");
const login_1 = __importDefault(require("./components/screens/login"));
const { height } = react_native_1.Dimensions.get("window");
let App = class App extends react_1.default.Component {
    render() {
        return (react_1.default.createElement(mobx_react_1.Provider, null,
            react_1.default.createElement(react_native_1.View, { style: styles.container },
                react_1.default.createElement(login_1.default, null))));
    }
};
App = __decorate([
    mobx_react_1.observer
], App);
exports.default = App;
const styles = react_native_1.StyleSheet.create({
    container: {
        height
    },
    center: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    }
});
