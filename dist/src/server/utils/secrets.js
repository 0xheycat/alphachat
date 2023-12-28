"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateSecrets = exports.generatePrivateKey = void 0;
const crypto_1 = require("crypto");
const process_1 = require("process");
const generatePrivateKey = () => (0, crypto_1.randomBytes)(32).toString('base64');
exports.generatePrivateKey = generatePrivateKey;
const generateSecrets = () => {
    return {
        PRIVATE_ENCRYPTION_KEY: (0, exports.generatePrivateKey)(),
    };
};
exports.generateSecrets = generateSecrets;
process_1.stdout.write(JSON.stringify((0, exports.generateSecrets)()));
