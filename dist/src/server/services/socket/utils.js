"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getRoomId = exports.getRoomName = exports.isRoomName = exports.generateUserName = void 0;
const uuid_1 = require("uuid");
const generateUserName = () => {
    return `user:${(0, uuid_1.v4)()}`;
};
exports.generateUserName = generateUserName;
const isRoomName = (roomName) => {
    return /^room:.+$/.test(roomName);
};
exports.isRoomName = isRoomName;
const getRoomName = (id) => `room:${id}`;
exports.getRoomName = getRoomName;
const getRoomId = (roomName) => {
    const res = /^room:(.+)$/.exec(roomName);
    return res ? res[1] : '';
};
exports.getRoomId = getRoomId;
