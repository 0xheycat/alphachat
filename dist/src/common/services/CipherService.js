"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CipherService = void 0;
const sdk_js_1 = require("@super-protocol/sdk-js");
const index_js_1 = require("@super-protocol/dto-js/build/enum/index.js");
const dto_js_1 = require("@super-protocol/dto-js");
class CipherService {
    constructor() {
        this._privateKey = '';
    }
    generatePrivateKeyByType(privateKey, type = 'hex') {
        switch (type) {
            case 'hex':
                return Buffer.from(privateKey, 'hex').toString('base64');
            default:
                return privateKey;
        }
    }
    setPrivateKey(privateKey, type = 'hex') {
        this._privateKey = this.generatePrivateKeyByType(privateKey, type);
        return this;
    }
    async encrypt(content) {
        if (!this._privateKey)
            throw new Error('Private key required');
        return sdk_js_1.Crypto.encrypt(content, {
            algo: index_js_1.CryptoAlgorithm.AES,
            encoding: index_js_1.Encoding.base64,
            key: this._privateKey,
            cipher: dto_js_1.Cipher.AES_256_GCM,
        });
    }
    async decrypt(encryption) {
        if (!this._privateKey)
            throw new Error('Private key required');
        if (!encryption)
            throw new Error('Encryption is not defined');
        encryption.key = this._privateKey;
        return sdk_js_1.Crypto.decrypt(encryption);
    }
}
exports.CipherService = CipherService;
