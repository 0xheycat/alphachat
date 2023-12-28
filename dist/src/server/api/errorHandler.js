"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.errorHandler = void 0;
const errorHandler = (error, res) => {
    if (typeof error === 'string') {
        return res.status(400).json({ error });
    }
    if (error?.message === 'UnauthorizedError') {
        return res.status(401).json({ error: 'Invalid Token' });
    }
    return res.status(500).json({ error: error?.message });
};
exports.errorHandler = errorHandler;
