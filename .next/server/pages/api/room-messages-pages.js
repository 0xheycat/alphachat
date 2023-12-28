"use strict";
(() => {
var exports = {};
exports.id = 455;
exports.ids = [455];
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

/***/ 5728:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   roomMessagesPages: () => (/* binding */ roomMessagesPages)
/* harmony export */ });
/* harmony import */ var _server_services_logger__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3796);
/* harmony import */ var _server_services_db__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7565);
/* harmony import */ var _server_api_apiHandler__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(280);
/* harmony import */ var _server_services_authCookie_AuthCookieService__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6435);
/* harmony import */ var _server_services_jwt_JWTService__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(7837);
/* harmony import */ var _client_utils_config__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(7062);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_server_services_db__WEBPACK_IMPORTED_MODULE_1__]);
_server_services_db__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];






const createRoomLogger = _server_services_logger__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z.child({
    name: "roomMessagesPages"
});
const config = (0,_client_utils_config__WEBPACK_IMPORTED_MODULE_5__/* .getConfig */ .i)();
const roomMessagesPages = async (req, res)=>{
    if (req.method !== "GET") {
        return res.status(405).json({
            error: "Method not allowed"
        });
    }
    if (!req.body) return res.status(400).json({
        error: "Bad request"
    });
    const { pageNum, pageSize } = req.query;
    if (!pageNum) return res.status(400).json({
        error: "Page number required"
    });
    if (Number(pageSize) > config.MAX_PAGE_SIZE) {
        return res.status(400).json({
            error: `Page size must be less then ${config.MAX_PAGE_SIZE}`
        });
    }
    const token = _server_services_authCookie_AuthCookieService__WEBPACK_IMPORTED_MODULE_3__/* .AuthCookieService */ .n.getCookie(req, res);
    const { connectPassword } = new _server_services_jwt_JWTService__WEBPACK_IMPORTED_MODULE_4__/* .JWTService */ .Z().decode(token);
    if (!connectPassword) return res.status(400).json({
        error: "Connect password required"
    });
    try {
        const roomId = _server_services_db__WEBPACK_IMPORTED_MODULE_1__.db.rooms.getRoomIdByConnectPassword(connectPassword);
        if (!roomId) return res.status(400).json({
            error: "Room not found"
        });
        if (!await _server_services_db__WEBPACK_IMPORTED_MODULE_1__.db.rooms.isRoomExists(roomId)) return res.status(400).json({
            error: "Room not found"
        });
        const room = await _server_services_db__WEBPACK_IMPORTED_MODULE_1__.db.rooms.getRoomFromAllInstances(connectPassword);
        if (!room) return res.status(400).json({
            error: "Room not found"
        });
        const { messages } = room;
        const total = messages.length;
        const pageNumNumber = Number(pageNum);
        const pageSizeNumber = Number(pageSize) > 0 ? Number(pageSize) : config.PAGE_SIZE;
        const endIndex = total - (pageNumNumber - 1 > 0 ? pageNumNumber - 1 : 0) * pageSizeNumber;
        const startIndex = endIndex - pageSizeNumber;
        const slicedMessages = messages.slice(startIndex < 0 ? 0 : startIndex, endIndex < 0 ? 0 : endIndex);
        const hasNextPage = endIndex >= 0;
        return res.status(200).json({
            data: {
                messages: slicedMessages,
                hasNextPage,
                pageNum: pageNumNumber,
                total
            }
        });
    } catch (err) {
        createRoomLogger.error({
            err
        }, "Message fetch error");
        return res.status(500).json({
            error: "Message fetch error"
        });
    }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_server_api_apiHandler__WEBPACK_IMPORTED_MODULE_2__/* .apiHandler */ .G)(roomMessagesPages));

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [86,565,280], () => (__webpack_exec__(5728)));
module.exports = __webpack_exports__;

})();