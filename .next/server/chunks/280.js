"use strict";
exports.id = 280;
exports.ids = [280];
exports.modules = {

/***/ 280:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  G: () => (/* binding */ apiHandler)
});

// EXTERNAL MODULE: ./src/server/services/authCookie/index.ts
var authCookie = __webpack_require__(1231);
// EXTERNAL MODULE: ./src/server/services/jwt/index.ts
var jwt = __webpack_require__(7421);
;// CONCATENATED MODULE: ./src/server/api/jwtHandler.ts


const whiteList = [
    "/api/connect-to-room",
    "/api/new-room"
];
const jwtHandler = async (req, res)=>{
    if (whiteList.includes(req.url)) return;
    try {
        const token = authCookie/* AuthCookieService */.n.getCookie(req, res);
        const { connectPassword } = new jwt/* JWTService */.Z().decode(token);
        new jwt/* JWTService */.Z().setPrivateKey(connectPassword).verify(token);
    } catch (e) {
        throw new Error("UnauthorizedError");
    }
};

;// CONCATENATED MODULE: ./src/server/api/errorHandler.ts
const errorHandler = (error, res)=>{
    if (typeof error === "string") {
        return res.status(400).json({
            error
        });
    }
    if (error?.message === "UnauthorizedError") {
        return res.status(401).json({
            error: "Invalid Token"
        });
    }
    return res.status(500).json({
        error: error?.message
    });
};

;// CONCATENATED MODULE: ./src/server/api/apiHandler.ts


const apiHandler = (handler)=>{
    return async (req, res)=>{
        try {
            await jwtHandler(req, res);
            return handler(req, res);
        } catch (err) {
            return errorHandler(err, res);
        }
    };
};


/***/ })

};
;