"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.checkRoomAuth = exports.getRoomPasswordParams = exports.getUnauthorizedParams = void 0;
const jwt_1 = require("../services/jwt");
const authCookie_1 = require("../services/authCookie");
const utils_1 = require("../../common/utils");
const logger_1 = __importDefault(require("../services/logger"));
const db_1 = require("../services/db");
const roomAuthLogger = logger_1.default.child({ class: 'check room auth' });
const getUnauthorizedParams = (resolvedUrl, query, params) => {
    const newQuery = (0, utils_1.getQSFromObj)({
        ...(0, utils_1.deleteKeysFromObject)(query, Object.keys(params || {})),
        redirect: resolvedUrl && (0, utils_1.isRelative)(resolvedUrl)
            ? (0, utils_1.getPathFromUrl)(resolvedUrl) // keep only the pathname in the redirect url
            : undefined,
    });
    return {
        redirect: {
            destination: `/${newQuery}`,
            permanent: false,
        },
    };
};
exports.getUnauthorizedParams = getUnauthorizedParams;
const getRoomPasswordParams = () => {
    return {
        redirect: {
            destination: '/room-password',
            permanent: false,
        },
    };
};
exports.getRoomPasswordParams = getRoomPasswordParams;
const checkRoomAuth = (getServerSideProps) => {
    return async (ctx) => {
        try {
            const token = authCookie_1.AuthCookieService.getCookie(ctx?.req, ctx?.res);
            const { connectPassword, userName } = new jwt_1.JWTService().decode(token);
            new jwt_1.JWTService().setPrivateKey(connectPassword).verify(token);
            if (connectPassword) {
                await db_1.db.rooms.getRoomToken(connectPassword, userName);
            }
            else {
                return (0, exports.getRoomPasswordParams)();
            }
        }
        catch (err) {
            roomAuthLogger.error({ err });
            return (0, exports.getRoomPasswordParams)();
        }
        if (getServerSideProps) {
            return getServerSideProps(ctx);
        }
        return {
            props: {},
        };
    };
};
exports.checkRoomAuth = checkRoomAuth;
