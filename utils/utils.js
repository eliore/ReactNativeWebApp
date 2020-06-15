"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.sortByString = exports.roundToXDecimalPlaces = exports.roundToNearestMultipleOfX = exports.mapToArray = exports.arrayToMap = exports.arrayMin = exports.arrayMax = void 0;
const reduce_1 = __importDefault(require("lodash/reduce"));
const values_1 = __importDefault(require("lodash/values"));
function arrayMax(arr) {
    return Math.max(...arr);
}
exports.arrayMax = arrayMax;
function arrayMin(arr) {
    return Math.min(...arr);
}
exports.arrayMin = arrayMin;
function arrayToMap(array, by = "id") {
    return reduce_1.default(array, (result, value) => {
        if (value) {
            result[value[by]] = value;
        }
        return result;
    }, {});
}
exports.arrayToMap = arrayToMap;
function mapToArray(map) {
    return values_1.default(map);
}
exports.mapToArray = mapToArray;
function roundToNearestMultipleOfX(val, x, direction) {
    const roundingFunc = direction === "up" ? Math.ceil : Math.floor;
    return roundingFunc(val / x) * x;
}
exports.roundToNearestMultipleOfX = roundToNearestMultipleOfX;
function roundToXDecimalPlaces(val, x) {
    return Math.round(val * Math.pow(10, x)) / Math.pow(10, x);
}
exports.roundToXDecimalPlaces = roundToXDecimalPlaces;
function sortByString(a, b) {
    if (a < b) {
        return -1;
    }
    if (a > b) {
        return 1;
    }
    return 0;
}
exports.sortByString = sortByString;
