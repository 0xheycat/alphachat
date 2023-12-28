"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HelperService = void 0;
const node_crypto_1 = require("node:crypto");
const HelperService_1 = require("../../../common/services/HelperService");
class HelperService extends HelperService_1.HelperService {
    generateHash(str) {
        return (0, node_crypto_1.createHash)('sha256').update(str || (0, node_crypto_1.randomUUID)()).digest('hex');
    }
}
exports.HelperService = HelperService;
