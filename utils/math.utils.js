"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getPercentage = exports.getPercentageAmount = void 0;
exports.getPercentageAmount = (totalAmount, percentage) => (totalAmount * percentage) / 100;
exports.getPercentage = (amount, totalAmount) => (amount / totalAmount) * 100;
