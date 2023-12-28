"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthCookieService = void 0;
const cookies_next_1 = require("cookies-next");
const constants_1 = require("../../../common/constants");
class AuthCookieService {
    static updateCookie(req, res, token) {
        (0, cookies_next_1.setCookie)(constants_1.Cookies.AUTH_TOKEN, token, {
            req,
            res,
            // httpOnly: true,
            secure: process.env.NODE_ENV !== 'development',
            maxAge: 14 * 24 * 60 * 60,
            sameSite: 'lax',
            path: '/',
        });
    }
    static deleteCookie(req, res) {
        (0, cookies_next_1.deleteCookie)(constants_1.Cookies.AUTH_TOKEN, { req, res });
    }
    static getCookie(req, res) {
        const { [constants_1.Cookies.AUTH_TOKEN]: token } = (0, cookies_next_1.getCookies)({ req, res });
        return token || '';
    }
}
exports.AuthCookieService = AuthCookieService;
