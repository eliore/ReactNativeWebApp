"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class AsyncStorageUtils {
    constructor(key) {
        this.key = key;
    }
    async getItem() {
        return Promise.resolve(localStorage.getItem(this.key));
    }
    async setItem(value) {
        return Promise.resolve(localStorage.setItem(this.key, value));
    }
    async removeItem() {
        return Promise.resolve(localStorage.removeItem(this.key));
    }
}
exports.default = AsyncStorageUtils;
