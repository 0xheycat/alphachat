"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.jwtHandler = void 0;
const authCookie_1 = require("../services/authCookie");
const jwt_1 = require("../services/jwt");
const whiteList = ['/api/connect-to-room', '/api/new-room'];
const jwtHandler = async (req, res) => {
    if (whiteList.includes(req.url))
        return;
    try {
        const token = authCookie_1.AuthCookieService.getCookie(req, res);
        const { connectPassword } = new jwt_1.JWTService().decode(token);
        new jwt_1.JWTService().setPrivateKey(connectPassword).verify(token);
    }
    catch (e) {
        throw new Error('UnauthorizedError');
    }
};
exports.jwtHandler = jwtHandler;
