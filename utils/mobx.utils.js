"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.hasChangesByFields = void 0;
const isEqual_1 = __importDefault(require("lodash/isEqual"));
function hasChangesByFields(oldEntity, newEntity, fields) {
    if (!oldEntity || !newEntity || !fields || !fields.length) {
        return true;
    }
    for (const field of fields) {
        if (!isEqual_1.default(oldEntity[field], newEntity[field])) {
            return true;
        }
    }
    return false;
}
exports.hasChangesByFields = hasChangesByFields;
