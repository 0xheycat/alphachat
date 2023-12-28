"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.StorjClientService = void 0;
const sdk_js_1 = require("@super-protocol/sdk-js");
const logger_1 = __importDefault(require("../../logger"));
class StorjClientService {
    constructor() {
        this._client = null;
        this.logger = logger_1.default.child({ class: StorjClientService.name });
    }
    async connect(storageAccess, config) {
        this._client = new sdk_js_1.StorjAdapter(storageAccess, config);
        return this;
    }
    subscribe(cb) {
        return this._client?.subscribe(cb);
    }
    async get(key, encryptionKey) {
        return this._client?.get(key, encryptionKey);
    }
    async has(key) {
        return (!!this._client) && this._client.has(key);
    }
    async set(key, value, encryptionKey) {
        return this._client?.set(key, value, encryptionKey);
    }
    async delete(key) {
        return this._client?.del(key);
    }
    async close() {
        this._client?.stop();
        this._client = null;
    }
    async shutdown() {
        await this._client?.shutdown();
    }
}
exports.StorjClientService = StorjClientService;
