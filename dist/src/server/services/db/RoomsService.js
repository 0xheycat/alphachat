"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RoomsService = exports.RoomsEvents = void 0;
const sdk_js_1 = require("@super-protocol/sdk-js");
const crypto_1 = require("../../utils/crypto");
const HelperService_1 = require("../helper/HelperService");
const MessagesService_1 = require("./MessagesService");
const UsersService_1 = require("./UsersService");
const PubSub_1 = __importDefault(require("../PubSub"));
const jwt_1 = require("../jwt");
const logger_1 = __importDefault(require("../logger"));
var RoomsEvents;
(function (RoomsEvents) {
    RoomsEvents["ROOM_DELETE"] = "ROOM_DELETE";
    RoomsEvents["MESSAGE_ADD"] = "MESSAGE_ADD";
    RoomsEvents["MESSAGES_ADD"] = "MESSAGES_ADD";
    RoomsEvents["USER_ADD"] = "USER_ADD";
    RoomsEvents["USERS_UPDATE"] = "USERS_UPDATE";
    RoomsEvents["USER_DELETE"] = "USER_DELETE";
})(RoomsEvents || (exports.RoomsEvents = RoomsEvents = {}));
class RoomsService {
    constructor({ client }) {
        this.helpers = new HelperService_1.HelperService();
        this.pubSub = new PubSub_1.default();
        this.eventName = 'rooms';
        this.messageSevice = new MessagesService_1.MessagesService();
        this.usersService = new UsersService_1.UsersService();
        this.passwords = new Map();
        this.client = client;
        this.logger = logger_1.default.child({ class: RoomsService.name });
        this.usersService = new UsersService_1.UsersService();
        const cb = async ({ type, message: roomId }) => {
            switch (type) {
                case sdk_js_1.CacheEvents.INSTANCES_CHANGED:
                    this.onInstancesChanged(roomId);
                    break;
                case sdk_js_1.CacheEvents.KEY_DELETED:
                    this.publish(RoomsEvents.ROOM_DELETE, { room: null, roomId });
                    break;
                default:
                    break;
            }
        };
        this.client.subscribe((props) => cb.call(this, props));
    }
    async subscribe(cb) {
        this.pubSub.subscribe(this.eventName, cb);
        return async () => {
            this.pubSub.unsubscribe(this.eventName, cb);
        };
    }
    publish(type, message) {
        this.pubSub.publish(this.eventName, { type, message });
    }
    async createRoom(roomName) {
        const deletePassword = (0, crypto_1.generateMnemonic)();
        const connectPassword = this.helpers.generateHash(deletePassword);
        const createdAt = new Date().toISOString();
        const params = {
            messages: [],
            users: [],
            createdAt,
            updatedAt: createdAt,
            name: this.helpers.textToBase64(roomName),
        };
        await this.updateRoom(connectPassword, params);
        return {
            ...params,
            connectPassword,
            deletePassword,
        };
    }
    async updateRoom(connectPassword, content) {
        if (!connectPassword)
            throw new Error('Password required');
        const roomId = this.helpers.generateHash(connectPassword);
        this.passwords.set(roomId, connectPassword);
        await this.client.set(roomId, content, this.helpers.bufferFromHex(connectPassword));
    }
    getRoomIdByConnectPassword(connectPassword) {
        if (!connectPassword)
            throw new Error('Password required');
        const roomId = this.helpers.generateHash(connectPassword);
        if (!roomId)
            throw new Error('Room is not defined');
        return roomId;
    }
    getConnectPasswordByDeletePassword(deletePassword) {
        if (!deletePassword)
            throw new Error('Password required');
        return this.helpers.generateHash(deletePassword);
    }
    getRoomIdByDeletePassword(deletePassword) {
        if (!deletePassword)
            throw new Error('Password required');
        return this.helpers.generateHash(this.getConnectPasswordByDeletePassword(deletePassword));
    }
    async getRoomFromAllInstances(connectPassword) {
        if (!connectPassword) {
            throw new Error('Password required');
        }
        const roomId = this.getRoomIdByConnectPassword(connectPassword);
        const instances = await this.client.get(roomId, this.helpers.bufferFromHex(connectPassword));
        if (!instances?.length)
            return null;
        this.passwords.set(roomId, connectPassword);
        return this.mergeRooms(instances) || null;
    }
    async getRoomFromCurrentInstance(connectPassword) {
        if (!connectPassword) {
            throw new Error('Password required');
        }
        const roomId = this.getRoomIdByConnectPassword(connectPassword);
        const instances = await this.client.get(roomId, this.helpers.bufferFromHex(connectPassword));
        const hasNonNullInstances = instances?.some((instance) => !!instance);
        if (!instances || !hasNonNullInstances)
            return null;
        const firstInstance = instances[0];
        if (!firstInstance) { // save room if not found
            const mergedInstance = this.mergeRooms(instances);
            const newDecryptedRoomForCurrentInstance = {
                ...mergedInstance,
                users: [],
            };
            await this.updateRoom(connectPassword, newDecryptedRoomForCurrentInstance);
            return newDecryptedRoomForCurrentInstance;
        }
        this.passwords.set(roomId, connectPassword);
        // merging messages is potentially redundant
        if (this.hasUnmergedMessages(firstInstance, instances)) {
            firstInstance.messages = this.mergeMessages(instances.map((instance) => instance.messages));
        }
        return firstInstance;
    }
    async getRoomToken(connectPassword, userName) {
        if (!connectPassword)
            throw new Error('Password required');
        if (!userName)
            throw new Error('User name required');
        const room = await this.getRoomFromCurrentInstance(connectPassword); // do not need to merge
        if (!room)
            throw new Error('Room is not defined');
        const { createdAt, name } = room;
        return new jwt_1.JWTService().setPrivateKey(connectPassword).sign({
            createdAt,
            roomName: this.helpers.textFromBase64(name),
            userName,
            connectPassword,
        });
    }
    async deleteRoom(deletePassword) {
        if (!deletePassword)
            throw new Error('Delete password required');
        const roomId = this.getRoomIdByDeletePassword(deletePassword);
        const connectPassword = this.getConnectPasswordByDeletePassword(deletePassword);
        const room = await this.getRoomFromCurrentInstance(connectPassword);
        if (!room)
            throw new Error('Room is not defined');
        await this.client.delete(roomId);
        this.publish(RoomsEvents.ROOM_DELETE, { room, roomId });
        return true;
    }
    async replaceUsersInRoomByNewUser(params) {
        return this.addUserToRoom(params, true);
    }
    async addUserToRoom(params, replace = false) {
        const { connectPassword, userInfo } = params;
        if (!userInfo?.name)
            throw new Error('User name required');
        if (!connectPassword)
            throw new Error('Password required');
        const roomId = this.getRoomIdByConnectPassword(connectPassword);
        const room = await this.getRoomFromCurrentInstance(connectPassword);
        if (!room)
            throw new Error('Room is not defined');
        this.usersService.setUsers(replace ? [] : room.users);
        const newUser = await this.usersService.addUser(params);
        await this.updateRoom(connectPassword, {
            ...room,
            users: this.usersService.users,
            updatedAt: new Date().toISOString(),
        });
        this.publish(RoomsEvents.USER_ADD, { user: newUser, roomId });
        return newUser;
    }
    async addMessageToRoom(message, connectPassword) {
        if (!connectPassword)
            throw new Error('Password required');
        const roomId = this.getRoomIdByConnectPassword(connectPassword);
        const room = await this.getRoomFromCurrentInstance(connectPassword);
        if (!room)
            return false;
        this.messageSevice.setMessages(room?.messages);
        const savedMessage = await this.messageSevice.addMessage(message, connectPassword);
        await this.updateRoom(connectPassword, {
            ...room,
            messages: this.messageSevice.messages,
            updatedAt: new Date().toISOString(),
        });
        this.publish(RoomsEvents.MESSAGE_ADD, { message: savedMessage, roomId });
        return true;
    }
    async getUserByIdInRoom(connectPassword, userId) {
        if (!connectPassword)
            throw new Error('Password id required');
        const room = await this.getRoomFromCurrentInstance(connectPassword);
        return (room?.users || []).find(({ id }) => id === userId) || null;
    }
    async deleteUserFromRoom(userId, connectPassword) {
        if (!userId)
            throw new Error('User id required');
        const roomId = this.getRoomIdByConnectPassword(connectPassword);
        const room = await this.getRoomFromCurrentInstance(connectPassword);
        if (!room)
            throw new Error('Room is not defined');
        this.usersService.setUsers(room?.users);
        const deletedUser = this.usersService.deleteUser(userId);
        await this.updateRoom(connectPassword, {
            ...room,
            users: this.usersService.users,
            updatedAt: new Date().toISOString(),
        });
        this.publish(RoomsEvents.USER_DELETE, { user: deletedUser, roomId });
        return true;
    }
    async onInstancesChanged(roomId) {
        const connectPassword = this.passwords.get(roomId);
        if (!connectPassword) {
            this.logger.info({ roomId }, 'Password not found');
            return;
        }
        const updatedMessagesAndUsers = await this.getUpdatedMessagesAndUsers(connectPassword);
        if (!updatedMessagesAndUsers)
            return;
        const { messagesAdded, usersAll } = updatedMessagesAndUsers;
        if (messagesAdded.length) {
            this.publish(RoomsEvents.MESSAGES_ADD, { messages: messagesAdded, roomId });
        }
        this.publish(RoomsEvents.USERS_UPDATE, { users: usersAll, roomId });
    }
    async getUpdatedMessagesAndUsers(connectPassword) {
        if (!connectPassword)
            throw new Error('Password id required');
        const roomId = this.getRoomIdByConnectPassword(connectPassword);
        const instances = await this.client.get(roomId, this.helpers.bufferFromHex(connectPassword));
        if (!instances)
            return null;
        const [currentInstance, ...otherInstances] = instances;
        if (!currentInstance)
            return null;
        if (!otherInstances?.length)
            return null;
        const messagesAdded = this.findAddedMessages(currentInstance.messages, otherInstances.flatMap((instance) => instance?.messages || []));
        const usersAll = this.mergeUsers([currentInstance.users, otherInstances.flatMap((instance) => instance?.users || [])]);
        return {
            messagesAdded,
            usersAll,
        };
    }
    async isRoomExists(roomId) {
        return this.client.has(roomId);
    }
    findAddedMessages(currMessages, allMessages) {
        const map = new Set(currMessages.map((copy) => copy?.id));
        return allMessages.filter((newMessage) => !map.has(newMessage?.id));
    }
    hasUnmergedMessages(firstInstance, otherInstances) {
        const firstInstanceMessagesUpdate = new Date(firstInstance.messages.at(-1)?.updatedAt || 0).getTime();
        const someInstancesUpdated = otherInstances.some((instance) => {
            const otherInstanceMessagesUpdate = new Date(instance.messages.at(-1)?.updatedAt || 0).getTime();
            return otherInstanceMessagesUpdate > firstInstanceMessagesUpdate;
        });
        return someInstancesUpdated;
    }
    mergeRooms(copies) {
        if (!copies?.length) {
            return null;
        }
        const result = copies.filter((room) => !!room)[0]; // find the first null room
        if (!result)
            return null;
        return {
            ...result,
            messages: this.mergeMessages(copies.map((copy) => copy?.messages || [])),
            users: this.mergeUsers(copies.map((copy) => copy?.users || [])),
        };
    }
    mergeMessages(copies) {
        const map = new Map(copies.flat().map((copy) => ([copy.id, copy])));
        return Array.from(map.values()).sort((a, b) => {
            if (a?.createdAt === b?.createdAt) {
                return a.id > b.id ? 1 : -1;
            }
            return new Date(a?.createdAt).getTime() - new Date(b?.createdAt).getTime();
        });
    }
    mergeUsers(copies) {
        const map = new Map(copies.flat().map((copy) => ([copy.id, copy])));
        return Array.from(map.values());
    }
    async deleteAllUsers(connectPassword) {
        if (!connectPassword)
            throw new Error('Password id required');
        const room = await this.getRoomFromCurrentInstance(connectPassword);
        if (!room)
            return;
        await this.updateRoom(connectPassword, {
            ...room,
            users: [],
        });
    }
}
exports.RoomsService = RoomsService;
