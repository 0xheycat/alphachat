"use strict";
(() => {
var exports = {};
exports.id = 621;
exports.ids = [621];
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

/***/ 7847:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   deleteRoom: () => (/* binding */ deleteRoom)
/* harmony export */ });
/* harmony import */ var _server_services_db__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7565);
/* harmony import */ var _server_services_logger__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3796);
/* harmony import */ var _server_api_apiHandler__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(280);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_server_services_db__WEBPACK_IMPORTED_MODULE_0__]);
_server_services_db__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];



const deleteRoomLogger = _server_services_logger__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z.child({
    name: "deleteRoom"
});
const deleteRoom = async (req, res)=>{
    if (req.method !== "POST") {
        return res.status(405).json({
            error: "Method not allowed"
        });
    }
    if (!req.body) return res.status(400).json({
        error: "Bad request"
    });
    const { deletePassword } = req.body;
    if (!deletePassword) return res.status(400).json({
        error: "Password required"
    });
    try {
        await _server_services_db__WEBPACK_IMPORTED_MODULE_0__.db.rooms.deleteRoom(deletePassword);
    } catch (e) {
        return res.status(401).json({
            error: "Failed to delete room. Password invalid"
        });
    }
    try {
        deleteRoomLogger.info("Room successfully deleted");
        return res.status(200).json({
            data: "Room successfully deleted"
        });
    } catch (err) {
        deleteRoomLogger.error({
            err
        });
        return res.status(500).json({
            error: "Failed to delete room"
        });
    }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_server_api_apiHandler__WEBPACK_IMPORTED_MODULE_2__/* .apiHandler */ .G)(deleteRoom));

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [86,565,280], () => (__webpack_exec__(7847)));
module.exports = __webpack_exports__;

})();