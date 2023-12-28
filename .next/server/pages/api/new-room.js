"use strict";
(() => {
var exports = {};
exports.id = 552;
exports.ids = [552];
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

/***/ 1749:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createRoom: () => (/* binding */ createRoom),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _server_services_logger__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3796);
/* harmony import */ var _server_services_db__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7565);
/* harmony import */ var _client_utils_config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(7062);
/* harmony import */ var _server_api_apiHandler__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(280);
/* harmony import */ var _common_services_HelperService__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(4428);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_server_services_db__WEBPACK_IMPORTED_MODULE_1__]);
_server_services_db__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];





const createRoomLogger = _server_services_logger__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z.child({
    name: "createRoom"
});
const config = (0,_client_utils_config__WEBPACK_IMPORTED_MODULE_3__/* .getConfig */ .i)();
const createRoom = async (req, res)=>{
    if (req.method !== "POST") {
        return res.status(405).json({
            error: "Method not allowed"
        });
    }
    if (!req.body) return res.status(400).json({
        error: "Bad request"
    });
    const { roomName, userName } = req.body;
    if (!roomName) return res.status(400).json({
        error: "Room required"
    });
    if (!userName) return res.status(400).json({
        error: "User required"
    });
    if (roomName.length > config.MAX_ROOM_NAME_SYMBOLS) {
        return res.status(400).json({
            error: `Room name must have max ${config.MAX_ROOM_NAME_SYMBOLS} symbols`
        });
    }
    if (userName.length > config.MAX_USER_NAME_SYMBOLS) {
        return res.status(400).json({
            error: `User name must have max ${config.MAX_USER_NAME_SYMBOLS} symbols`
        });
    }
    try {
        const { connectPassword, deletePassword, name } = await _server_services_db__WEBPACK_IMPORTED_MODULE_1__.db.rooms.createRoom(roomName);
        return res.status(200).json({
            data: {
                connectPassword,
                deletePassword,
                roomName: new _common_services_HelperService__WEBPACK_IMPORTED_MODULE_4__/* .HelperService */ .W().textFromBase64(name)
            }
        });
    } catch (err) {
        createRoomLogger.error({
            err
        }, "Room creation error");
        return res.status(500).json({
            error: "Room creation error"
        });
    }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_server_api_apiHandler__WEBPACK_IMPORTED_MODULE_2__/* .apiHandler */ .G)(createRoom));

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [86,565,280], () => (__webpack_exec__(1749)));
module.exports = __webpack_exports__;

})();