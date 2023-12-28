"use strict";
exports.id = 86;
exports.ids = [86];
exports.modules = {

/***/ 7062:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   i: () => (/* binding */ getConfig)
/* harmony export */ });
const getConfig = ()=>({
        MAX_USER_NAME_SYMBOLS: Number(process.env.NEXT_PUBLIC_MAX_USER_NAME_SYMBOLS || 0) || 15,
        MAX_ROOM_NAME_SYMBOLS: Number(process.env.NEXT_PUBLIC_MAX_USER_NAME_SYMBOLS || 0) || 30,
        MAX_MESSAGE_SYMBOLS: Number(process.env.NEXT_PUBLIC_MAX_MESSAGE_SYMBOLS || 0) || 500,
        PAGE_SIZE: 10,
        MAX_PAGE_SIZE: 100
    });


/***/ }),

/***/ 4428:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   W: () => (/* binding */ HelperService)
/* harmony export */ });
class HelperService {
    textToBase64(text) {
        if (!text || typeof text !== "string") return "";
        return Buffer.from(text).toString("base64");
    }
    textFromBase64(base64) {
        if (!base64 || typeof base64 !== "string") return "";
        return Buffer.from(base64, "base64").toString("utf8");
    }
    bufferFromHex(hex) {
        return Buffer.from(hex, "hex");
    }
}


/***/ }),

/***/ 3434:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   i: () => (/* binding */ getConfig)
/* harmony export */ });
/* harmony import */ var _client_utils_config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7062);

const getConfig = ()=>({
        ...(0,_client_utils_config__WEBPACK_IMPORTED_MODULE_0__/* .getConfig */ .i)(),
        DOWNLOADER: {
            lruCache: {
                max: 500
            },
            writeInterval: Number(process.env.WRITE_INTERVAL) || 4000,
            readInterval: Number(process.env.READ_INTERVAL) || 1000,
            objectDeletedFlag: "deleted"
        },
        IPFS_URL: process.env.IPFS_URL,
        CLIENT: process.env.CLIENT,
        STORJ_CREDENTIALS: {
            prefix: process.env.STORJ_PREFIX || "",
            bucket: process.env.STORJ_BUCKET,
            token: process.env.STORJ_TOKEN
        },
        S3_CREDENTIALS: {
            accessKeyId: process.env.S3_ACCESS_KEY_ID,
            secretAccessKey: process.env.S3_ACCESS_SECRET_KEY,
            endpoint: process.env.S3_ENDPOINT || "https://gateway.storjshare.io",
            bucket: process.env.STORJ_BUCKET,
            region: process.env.S3_REGION || "us-east-1"
        },
        jwt: {
            expires: 14
        }
    });


/***/ }),

/***/ 6435:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  n: () => (/* binding */ AuthCookieService)
});

// EXTERNAL MODULE: external "cookies-next"
var external_cookies_next_ = __webpack_require__(8982);
;// CONCATENATED MODULE: ./src/common/constants.ts
var Cookies;
(function(Cookies) {
    Cookies["AUTH_TOKEN"] = "sp-chat-auth-token";
})(Cookies || (Cookies = {}));
const BG_DARK = "#060E21";
const BG_LIGHT = "#fff";

;// CONCATENATED MODULE: ./src/server/services/authCookie/AuthCookieService.ts


class AuthCookieService {
    static updateCookie(req, res, token) {
        (0,external_cookies_next_.setCookie)(Cookies.AUTH_TOKEN, token, {
            req,
            res,
            // httpOnly: true,
            secure: "production" !== "development",
            maxAge: 14 * 24 * 60 * 60,
            sameSite: "lax",
            path: "/"
        });
    }
    static deleteCookie(req, res) {
        (0,external_cookies_next_.deleteCookie)(Cookies.AUTH_TOKEN, {
            req,
            res
        });
    }
    static getCookie(req, res) {
        const { [Cookies.AUTH_TOKEN]: token } = (0,external_cookies_next_.getCookies)({
            req,
            res
        });
        return token || "";
    }
}


/***/ }),

/***/ 1231:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   n: () => (/* reexport safe */ _AuthCookieService__WEBPACK_IMPORTED_MODULE_0__.n)
/* harmony export */ });
/* harmony import */ var _AuthCookieService__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6435);



/***/ }),

/***/ 6090:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   W: () => (/* binding */ HelperService)
/* harmony export */ });
/* harmony import */ var node_crypto__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6005);
/* harmony import */ var node_crypto__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(node_crypto__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _common_services_HelperService__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4428);


class HelperService extends _common_services_HelperService__WEBPACK_IMPORTED_MODULE_1__/* .HelperService */ .W {
    generateHash(str) {
        return (0,node_crypto__WEBPACK_IMPORTED_MODULE_0__.createHash)("sha256").update(str || (0,node_crypto__WEBPACK_IMPORTED_MODULE_0__.randomUUID)()).digest("hex");
    }
}


/***/ }),

/***/ 7837:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (/* binding */ JWTService)
/* harmony export */ });
/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9344);
/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jsonwebtoken__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _helper_HelperService__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6090);
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3434);



class JWTService {
    setPrivateKey(jwtSecret) {
        this.jwtSecret = jwtSecret;
        return this;
    }
    updateJwtSecret(jwtSecret) {
        this.jwtSecret = jwtSecret;
        return this;
    }
    verify(token) {
        if (!token) throw new Error("Token is empty");
        const tokenWithoutBearer = token?.replace("Bearer ", "");
        if (!tokenWithoutBearer) {
            throw new Error("No token provided");
        }
        if (!this.jwtSecret) {
            throw new Error("jwt secret required");
        }
        try {
            return jsonwebtoken__WEBPACK_IMPORTED_MODULE_0___default().verify(tokenWithoutBearer, this.jwtSecret);
        } catch (e) {
            throw new Error("Invalid token");
        }
    }
    decode(token) {
        if (!token) throw new Error("Token is empty");
        try {
            return jsonwebtoken__WEBPACK_IMPORTED_MODULE_0___default().decode(token);
        } catch (e) {
            throw new Error("Decode token error");
        }
    }
    sign(props) {
        if (!this.jwtSecret) {
            throw new Error("jwt secret required");
        }
        const { createdAt, roomName, userName, connectPassword } = props || {};
        return jsonwebtoken__WEBPACK_IMPORTED_MODULE_0___default().sign({
            createdAt,
            roomName,
            userName,
            connectPassword
        }, this.jwtSecret, {
            expiresIn: `${(0,_config__WEBPACK_IMPORTED_MODULE_2__/* .getConfig */ .i)().jwt.expires}d`
        });
    }
    generateJwtKey(privateKey) {
        if (!privateKey) throw new Error("Private key required");
        return this.helpers.generateHash(privateKey);
    }
    updateJwtKeyByPrivateKey(privateKey) {
        this.jwtSecret = this.generateJwtKey(privateKey);
    }
    constructor(){
        this.helpers = new _helper_HelperService__WEBPACK_IMPORTED_MODULE_1__/* .HelperService */ .W();
    }
}


/***/ }),

/***/ 7421:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (/* reexport safe */ _JWTService__WEBPACK_IMPORTED_MODULE_0__.Z)
/* harmony export */ });
/* harmony import */ var _JWTService__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7837);



/***/ }),

/***/ 3796:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var pino__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8545);
/* harmony import */ var pino__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(pino__WEBPACK_IMPORTED_MODULE_0__);

const logger = pino__WEBPACK_IMPORTED_MODULE_0___default()();
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (logger);


/***/ })

};
;