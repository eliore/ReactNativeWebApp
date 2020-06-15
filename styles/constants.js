"use strict";
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.windowWidth = exports.windowHeight = void 0;
const react_native_1 = require("react-native");
// General
_a = react_native_1.Dimensions.get("window"), exports.windowHeight = _a.height, exports.windowWidth = _a.width;
