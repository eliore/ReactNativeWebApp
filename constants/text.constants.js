"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NON_LETTER_OR_NUMBERS = exports.FIRST_NON_NUMBER = exports.FIRST_NUMBER_IN_STRING = exports.START_WITH_NUMBERS = void 0;
exports.START_WITH_NUMBERS = new RegExp("^[0-9]*");
exports.FIRST_NUMBER_IN_STRING = new RegExp("\\d+");
exports.FIRST_NON_NUMBER = new RegExp("^\\D*");
exports.NON_LETTER_OR_NUMBERS = new RegExp("[^a-zA-Z0-9]");
