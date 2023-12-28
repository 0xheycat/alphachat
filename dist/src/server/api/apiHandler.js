"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.apiHandler = void 0;
const jwtHandler_1 = require("./jwtHandler");
const errorHandler_1 = require("./errorHandler");
const apiHandler = (handler) => {
    return async (req, res) => {
        try {
            await (0, jwtHandler_1.jwtHandler)(req, res);
            return handler(req, res);
        }
        catch (err) {
            return (0, errorHandler_1.errorHandler)(err, res);
        }
    };
};
exports.apiHandler = apiHandler;
