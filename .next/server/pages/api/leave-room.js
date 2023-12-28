"use strict";
(() => {
var exports = {};
exports.id = 593;
exports.ids = [593];
exports.modules = {

/***/ 8982:
/***/ ((module) => {

module.exports = require("cookies-next");

/***/ }),

/***/ 9344:
/***/ ((module) => {

module.exports = require("jsonwebtoken");

/***/ }),

/***/ 8545:
/***/ ((module) => {

module.exports = require("pino");

/***/ }),

/***/ 6005:
/***/ ((module) => {

module.exports = require("node:crypto");

/***/ }),

/***/ 3588:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _server_services_logger__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3796);
/* harmony import */ var _server_services_jwt__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7421);
/* harmony import */ var _server_services_authCookie__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1231);
/* harmony import */ var _server_api_apiHandler__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(280);




const leaveRoom = async (req, res)=>{
    if (req.method !== "GET") {
        return res.status(405).json({
            error: "Method not allowed"
        });
    }
    const token = _server_services_authCookie__WEBPACK_IMPORTED_MODULE_2__/* .AuthCookieService */ .n.getCookie(req, res);
    if (!token) return res.status(401).json({
        error: "jwt token required"
    });
    let connectPassword;
    try {
        connectPassword = new _server_services_jwt__WEBPACK_IMPORTED_MODULE_1__/* .JWTService */ .Z().decode(token)?.connectPassword;
        new _server_services_jwt__WEBPACK_IMPORTED_MODULE_1__/* .JWTService */ .Z().setPrivateKey(connectPassword).verify(token);
    } catch (e) {
        return res.status(401).json({
            error: "Jwt token is invalid"
        });
    }
    if (!connectPassword) return res.status(401).json({
        error: "password required"
    });
    try {
        _server_services_authCookie__WEBPACK_IMPORTED_MODULE_2__/* .AuthCookieService */ .n.deleteCookie(req, res);
        return res.status(200).json({
            data: "ok"
        });
    } catch (err) {
        _server_services_logger__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z.error({
            err
        }, "error api leave-from-room");
        return res.status(500).json({
            error: "Leave room failed"
        });
    }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_server_api_apiHandler__WEBPACK_IMPORTED_MODULE_3__/* .apiHandler */ .G)(leaveRoom));


/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [86,280], () => (__webpack_exec__(3588)));
module.exports = __webpack_exports__;

})();