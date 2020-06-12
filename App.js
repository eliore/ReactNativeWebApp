"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const react_native_1 = require("react-native");
const { height } = react_native_1.Dimensions.get("screen");
const App = () => {
    return (react_1.default.createElement(react_native_1.View, { style: styles.container },
        react_1.default.createElement(react_native_1.View, { style: styles.center },
            react_1.default.createElement(react_native_1.Text, null, "Hello React Native Web!!!"))));
};
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
exports.default = App;
