"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.JWTService = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const HelperService_1 = require("../helper/HelperService");
const config_1 = require("../../config");
class JWTService {
    constructor() {
        this.helpers = new HelperService_1.HelperService();
    }
    setPrivateKey(jwtSecret) {
        this.jwtSecret = jwtSecret;
        return this;
    }
    updateJwtSecret(jwtSecret) {
        this.jwtSecret = jwtSecret;
        return this;
    }
    verify(token) {
        if (!token)
            throw new Error('Token is empty');
        const tokenWithoutBearer = token?.replace('Bearer ', '');
        if (!tokenWithoutBearer) {
            throw new Error('No token provided');
        }
        if (!this.jwtSecret) {
            throw new Error('jwt secret required');
        }
        try {
            return jsonwebtoken_1.default.verify(tokenWithoutBearer, this.jwtSecret);
        }
        catch (e) {
            throw new Error('Invalid token');
        }
    }
    decode(token) {
        if (!token)
            throw new Error('Token is empty');
        try {
            return jsonwebtoken_1.default.decode(token);
        }
        catch (e) {
            throw new Error('Decode token error');
        }
    }
    sign(props) {
        if (!this.jwtSecret) {
            throw new Error('jwt secret required');
        }
        const { createdAt, roomName, userName, connectPassword, } = props || {};
        return jsonwebtoken_1.default.sign({
            createdAt, roomName, userName, connectPassword,
        }, this.jwtSecret, { expiresIn: `${(0, config_1.getConfig)().jwt.expires}d` });
    }
    generateJwtKey(privateKey) {
        if (!privateKey)
            throw new Error('Private key required');
        return this.helpers.generateHash(privateKey);
    }
    updateJwtKeyByPrivateKey(privateKey) {
        this.jwtSecret = this.generateJwtKey(privateKey);
    }
}
exports.JWTService = JWTService;
