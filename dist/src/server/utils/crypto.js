"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateRandomKeys = exports.validateMnemonic = exports.generateECIESKeys = exports.generateMnemonic = void 0;
const crypto_1 = require("crypto");
const bip39_1 = require("bip39");
const generateMnemonic = () => (0, bip39_1.generateMnemonic)(256);
exports.generateMnemonic = generateMnemonic;
const generateECIESKeys = (mnemonic) => {
    const entropy = (0, bip39_1.mnemonicToEntropy)(mnemonic);
    const privateKeyBuffer = Buffer.from(entropy, 'hex');
    const ecdh = (0, crypto_1.createECDH)('secp256k1');
    ecdh.setPrivateKey(privateKeyBuffer);
    const publicKeyBuffer = ecdh.getPublicKey();
    const privateKeyBase64 = privateKeyBuffer.toString('base64');
    const publicKeyBase64 = publicKeyBuffer.toString('base64');
    return {
        privateKeyBase64,
        publicKeyBase64,
        privateKeyBuffer,
        publicKeyBuffer,
        mnemonic,
    };
};
exports.generateECIESKeys = generateECIESKeys;
const validateMnemonic = (mnemonic) => {
    let validate = (0, bip39_1.validateMnemonic)(mnemonic);
    if (!validate)
        return validate;
    try {
        (0, exports.generateECIESKeys)(mnemonic);
    }
    catch (e) {
        validate = false;
    }
    return validate;
};
exports.validateMnemonic = validateMnemonic;
const generateRandomKeys = () => {
    const ecdh = (0, crypto_1.createECDH)('secp256k1');
    ecdh.generateKeys();
    const privateKeyBuffer = ecdh.getPrivateKey();
    const publicKeyBuffer = ecdh.getPublicKey();
    const privateKeyBase64 = privateKeyBuffer.toString('base64');
    const publicKeyBase64 = publicKeyBuffer.toString('base64');
    return {
        privateKeyBuffer,
        publicKeyBuffer,
        privateKeyBase64,
        publicKeyBase64,
    };
};
exports.generateRandomKeys = generateRandomKeys;
