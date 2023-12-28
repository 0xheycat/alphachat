"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SocketUsersIdentify = void 0;
class SocketUsersIdentify {
    constructor() {
        this.users = new Map();
    }
    addUserBySocketId(socketId, value) {
        this.users.set(socketId, value);
        return this;
    }
    getUserBySocketId(socketId) {
        return this.users.get(socketId);
    }
    getUserSocketId(id) {
        return [...this.users.entries()].find(([, value]) => value?.id === id)?.[0];
    }
    getUsersByRoomId(roomId) {
        return [...this.users.entries()]
            .filter(([, value]) => value.roomId === roomId)
            .map(([socketId, value]) => ({ socketId, id: value.id }));
    }
    getUsersByRooms(roomIds) {
        return [...this.users.entries()]
            .filter(([, value]) => roomIds.includes(value.roomId))
            .map(([socketId, value]) => ({ socketId, id: value.id }));
    }
    deleteUserBySocketId(socketId) {
        this.users.delete(socketId);
        return true;
    }
    deleteUsersBySocketId(socketIds) {
        if (!socketIds?.length)
            return true;
        socketIds.map((socketId) => this.users.delete(socketId));
        return true;
    }
    deleteUsersByRoomId(roomId) {
        if (!roomId)
            return true;
        [...this.users.entries()].forEach(([socketId, value]) => {
            if (roomId === value.roomId) {
                this.users.delete(socketId);
            }
        });
        return true;
    }
    getUsersGroupedByRooms() {
        if (!this.users.size)
            return {};
        return [...this.users.values()].reduce((acc, { roomId, id }) => {
            if (acc[roomId]) {
                acc[roomId].add(id);
            }
            else {
                acc[roomId] = new Set([id]);
            }
            return acc;
        }, {});
    }
    getRooms() {
        if (this.users.size)
            return [];
        const set = [...this.users.values()].reduce((acc, { roomId }) => {
            acc.add(roomId);
            return acc;
        }, new Set());
        return [...set];
    }
    clear() {
        this.users.clear();
        return true;
    }
}
exports.SocketUsersIdentify = SocketUsersIdentify;
