"use strict";
(() => {
var exports = {};
exports.id = 735;
exports.ids = [735];
exports.modules = {

/***/ 4005:
/***/ ((module) => {

module.exports = require("@super-protocol/dto-js");

/***/ }),

/***/ 1800:
/***/ ((module) => {

module.exports = require("@super-protocol/dto-js/build/enum/index.js");

/***/ }),

/***/ 2461:
/***/ ((module) => {

module.exports = require("@super-protocol/sdk-js");

/***/ }),

/***/ 6176:
/***/ ((module) => {

module.exports = require("bip39");

/***/ }),

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

/***/ 6555:
/***/ ((module) => {

module.exports = import("uuid");;

/***/ }),

/***/ 6113:
/***/ ((module) => {

module.exports = require("crypto");

/***/ }),

/***/ 6005:
/***/ ((module) => {

module.exports = require("node:crypto");

/***/ }),

/***/ 8846:
/***/ ((module) => {

module.exports = require("node:perf_hooks");

/***/ }),

/***/ 7589:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _server_services_db__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7565);
/* harmony import */ var _server_services_logger__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3796);
/* harmony import */ var _server_services_jwt__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7421);
/* harmony import */ var _client_utils_config__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(7062);
/* harmony import */ var _server_services_authCookie__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1231);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_server_services_db__WEBPACK_IMPORTED_MODULE_0__]);
_server_services_db__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];





const connectToRoomLogger = _server_services_logger__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z.child({
    name: "connectToRoom"
});
const config = (0,_client_utils_config__WEBPACK_IMPORTED_MODULE_4__/* .getConfig */ .i)();
const connectToRoom = async (req, res)=>{
    if (req.method !== "POST") {
        return res.status(405).json({
            error: "Method not allowed"
        });
    }
    if (!req.body) return res.status(400).json({
        error: "Bad request"
    });
    const { connectPassword, userName } = req.body;
    if (!connectPassword) return res.status(400).json({
        error: "Password required"
    });
    if (!userName) return res.status(400).json({
        error: "Room name required"
    });
    if (userName.length > config.MAX_ROOM_NAME_SYMBOLS) {
        return res.status(400).json({
            error: `User name must have max ${config.MAX_USER_NAME_SYMBOLS} symbols`
        });
    }
    try {
        await _server_services_db__WEBPACK_IMPORTED_MODULE_0__.db.rooms.getRoomFromCurrentInstance(connectPassword);
    } catch (err) {
        return res.status(404).json({
            error: "This chat room does not exist"
        });
    }
    let token;
    let roomName;
    try {
        token = await _server_services_db__WEBPACK_IMPORTED_MODULE_0__.db.rooms.getRoomToken(connectPassword, userName);
    } catch (err) {
        return res.status(401).json({
            error: "Password invalid"
        });
    }
    try {
        const parsed = new _server_services_jwt__WEBPACK_IMPORTED_MODULE_2__/* .JWTService */ .Z().setPrivateKey(connectPassword).verify(token);
        roomName = parsed.roomName;
    } catch (err) {
        return res.status(401).json({
            error: "Jwt token is invalid"
        });
    }
    if (!roomName) return res.status(400).json({
        error: "Room name is not defined"
    });
    try {
        _server_services_authCookie__WEBPACK_IMPORTED_MODULE_3__/* .AuthCookieService */ .n.updateCookie(req, res, token);
        return res.status(200).json({
            data: {
                roomName,
                userName,
                token
            }
        });
    } catch (err) {
        connectToRoomLogger.error({
            err
        }, "error set cookie");
        return res.status(500).json({
            error: "Connect to the room failed"
        });
    }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (connectToRoom);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [86,565], () => (__webpack_exec__(7589)));
module.exports = __webpack_exports__;

})();