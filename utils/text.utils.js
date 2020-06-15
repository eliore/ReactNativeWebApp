"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.charRepeater = exports.fixedNumber = exports.textNumericPart = exports.containChar = exports.textNumberOrABC = exports.cutLongText = exports.lower = exports.upper = void 0;
const get_1 = __importDefault(require("lodash/get"));
const isEmpty_1 = __importDefault(require("lodash/isEmpty"));
const lowerCase_1 = __importDefault(require("lodash/lowerCase"));
const upperCase_1 = __importDefault(require("lodash/upperCase"));
const text_constants_1 = require("../constants/text.constants");
function upper(string) {
    return upperCase_1.default(string);
}
exports.upper = upper;
function lower(string) {
    return lowerCase_1.default(string);
}
exports.lower = lower;
function cutLongText(string, maxCount) {
    return string.length > maxCount
        ? `${string.substr(0, maxCount - 1)}...`
        : string;
}
exports.cutLongText = cutLongText;
function textNumberOrABC(text) {
    const numericPart = get_1.default(text.match(text_constants_1.START_WITH_NUMBERS), 0);
    // string does not start with number
    if (isEmpty_1.default(numericPart)) {
        const charPart = get_1.default(text.match(text_constants_1.FIRST_NON_NUMBER), 0, "");
        return charPart.toLowerCase().replace(text_constants_1.NON_LETTER_OR_NUMBERS, "");
    }
    return Number(numericPart);
}
exports.textNumberOrABC = textNumberOrABC;
function containChar(char, string) {
    for (const current of string) {
        if (current === char) {
            return true;
        }
    }
    return false;
}
exports.containChar = containChar;
function textNumericPart(text) {
    // start of name if number
    const numericPart = get_1.default(text.match(text_constants_1.START_WITH_NUMBERS), 0);
    // string starts with a number, no need for sub sort
    if (!isEmpty_1.default(numericPart)) {
        return null;
    }
    const firstNumber = get_1.default(text.match(text_constants_1.FIRST_NUMBER_IN_STRING), 0);
    // if no numbers in string, nothing to sub sort by
    if (isEmpty_1.default(firstNumber)) {
        return null;
    }
    return Number(firstNumber);
}
exports.textNumericPart = textNumericPart;
exports.fixedNumber = (number, fixedNumberParam) => {
    if (number % 1 === 0)
        return number;
    if (fixedNumberParam)
        return number.toFixed(fixedNumberParam);
    const numbersAfterDot = number.toString().split(".")[1];
    return numbersAfterDot.length === 1 ? number.toFixed(1) : number.toFixed(2);
};
exports.charRepeater = (char, amount) => {
    let string = "";
    for (let i = 0; i < amount; i++) {
        string += char;
    }
    return string;
};
