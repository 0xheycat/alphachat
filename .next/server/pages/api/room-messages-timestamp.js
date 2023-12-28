"use strict";
(() => {
var exports = {};
exports.id = 177;
exports.ids = [177];
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

/***/ 1635:
/***/ ((module) => {

module.exports = require("dayjs");

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

/***/ 7652:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   roomMessagesTimestamp: () => (/* binding */ roomMessagesTimestamp)
/* harmony export */ });
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1635);
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(dayjs__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _server_services_logger__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3796);
/* harmony import */ var _server_services_db__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7565);
/* harmony import */ var _server_api_apiHandler__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(280);
/* harmony import */ var _server_services_authCookie_AuthCookieService__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6435);
/* harmony import */ var _server_services_jwt_JWTService__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(7837);
/* harmony import */ var _client_utils_config__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(7062);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_server_services_db__WEBPACK_IMPORTED_MODULE_2__]);
_server_services_db__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];







const createRoomLogger = _server_services_logger__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z.child({
    name: "roomMessagesTimestamp"
});
const config = (0,_client_utils_config__WEBPACK_IMPORTED_MODULE_6__/* .getConfig */ .i)();
var Direction;
(function(Direction) {
    Direction["up"] = "up";
    Direction["down"] = "down";
})(Direction || (Direction = {}));
const roomMessagesTimestamp = async (req, res)=>{
    if (req.method !== "GET") {
        return res.status(405).json({
            error: "Method not allowed"
        });
    }
    if (!req.body) return res.status(400).json({
        error: "Bad request"
    });
    const { timestamp, count } = req.query;
    if (!timestamp) return res.status(400).json({
        error: "Timestamp required"
    });
    const pageCount = Number(count);
    if (Math.abs(pageCount) > config.MAX_PAGE_SIZE) {
        return res.status(400).json({
            error: `Count must be less then ${config.MAX_PAGE_SIZE}`
        });
    }
    const direction = pageCount >= 0 ? Direction.up : Direction.down;
    const date = dayjs__WEBPACK_IMPORTED_MODULE_0___default()(Number(timestamp));
    if (!date.isValid()) res.status(400).json({
        error: "Timestamp is invalid"
    });
    const token = _server_services_authCookie_AuthCookieService__WEBPACK_IMPORTED_MODULE_4__/* .AuthCookieService */ .n.getCookie(req, res);
    const { connectPassword } = new _server_services_jwt_JWTService__WEBPACK_IMPORTED_MODULE_5__/* .JWTService */ .Z().decode(token);
    if (!connectPassword) return res.status(400).json({
        error: "Connect password required"
    });
    try {
        const roomId = _server_services_db__WEBPACK_IMPORTED_MODULE_2__.db.rooms.getRoomIdByConnectPassword(connectPassword);
        if (!roomId) return res.status(400).json({
            error: "Room not found"
        });
        if (!await _server_services_db__WEBPACK_IMPORTED_MODULE_2__.db.rooms.isRoomExists(roomId)) return res.status(400).json({
            error: "Room not found"
        });
        const room = await _server_services_db__WEBPACK_IMPORTED_MODULE_2__.db.rooms.getRoomFromAllInstances(connectPassword);
        if (!room) return res.status(400).json({
            error: "Room not found"
        });
        const { messages } = room;
        const total = messages.length;
        const filteredMessages = messages.filter(({ updatedAt })=>direction === Direction.up ? +dayjs__WEBPACK_IMPORTED_MODULE_0___default()(updatedAt) <= +date : +dayjs__WEBPACK_IMPORTED_MODULE_0___default()(updatedAt) >= +date).sort((a, b)=>direction === Direction.up ? dayjs__WEBPACK_IMPORTED_MODULE_0___default()(a.updatedAt).isAfter(b.updatedAt) ? 1 : -1 : dayjs__WEBPACK_IMPORTED_MODULE_0___default()(a.updatedAt).isAfter(b.updatedAt) ? -1 : 1);
        const slicedMessages = filteredMessages.slice(-Math.abs(pageCount));
        const firstMessage = slicedMessages[0];
        const newTimestamp = firstMessage?.updatedAt && dayjs__WEBPACK_IMPORTED_MODULE_0___default()(firstMessage.updatedAt).isValid() && slicedMessages.length >= Math.abs(pageCount) ? +dayjs__WEBPACK_IMPORTED_MODULE_0___default()(firstMessage.updatedAt) : null;
        return res.status(200).json({
            data: {
                messages: slicedMessages,
                hasNextPage: !!newTimestamp,
                total,
                timestamp: newTimestamp
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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_server_api_apiHandler__WEBPACK_IMPORTED_MODULE_3__/* .apiHandler */ .G)(roomMessagesTimestamp));

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [86,565,280], () => (__webpack_exec__(7652)));
module.exports = __webpack_exports__;

})();