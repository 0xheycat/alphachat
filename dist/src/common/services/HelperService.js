"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HelperService = void 0;
class HelperService {
    textToBase64(text) {
        if (!text || typeof text !== 'string')
            return '';
        return Buffer.from(text).toString('base64');
    }
    textFromBase64(base64) {
        if (!base64 || typeof base64 !== 'string')
            return '';
        return Buffer.from(base64, 'base64').toString('utf8');
    }
    bufferFromHex(hex) {
        return Buffer.from(hex, 'hex');
    }
}
exports.HelperService = HelperService;
