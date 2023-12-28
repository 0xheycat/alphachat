"use strict";
exports.id = 565;
exports.ids = [565];
exports.modules = {

/***/ 1672:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   u: () => (/* binding */ CipherService)
/* harmony export */ });
/* harmony import */ var _super_protocol_sdk_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2461);
/* harmony import */ var _super_protocol_sdk_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_super_protocol_sdk_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _super_protocol_dto_js_build_enum_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1800);
/* harmony import */ var _super_protocol_dto_js_build_enum_index_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_super_protocol_dto_js_build_enum_index_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _super_protocol_dto_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4005);
/* harmony import */ var _super_protocol_dto_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_super_protocol_dto_js__WEBPACK_IMPORTED_MODULE_2__);



class CipherService {
    generatePrivateKeyByType(privateKey, type = "hex") {
        switch(type){
            case "hex":
                return Buffer.from(privateKey, "hex").toString("base64");
            default:
                return privateKey;
        }
    }
    setPrivateKey(privateKey, type = "hex") {
        this._privateKey = this.generatePrivateKeyByType(privateKey, type);
        return this;
    }
    async encrypt(content) {
        if (!this._privateKey) throw new Error("Private key required");
        return _super_protocol_sdk_js__WEBPACK_IMPORTED_MODULE_0__.Crypto.encrypt(content, {
            algo: _super_protocol_dto_js_build_enum_index_js__WEBPACK_IMPORTED_MODULE_1__.CryptoAlgorithm.AES,
            encoding: _super_protocol_dto_js_build_enum_index_js__WEBPACK_IMPORTED_MODULE_1__.Encoding.base64,
            key: this._privateKey,
            cipher: _super_protocol_dto_js__WEBPACK_IMPORTED_MODULE_2__.Cipher.AES_256_GCM
        });
    }
    async decrypt(encryption) {
        if (!this._privateKey) throw new Error("Private key required");
        if (!encryption) throw new Error("Encryption is not defined");
        encryption.key = this._privateKey;
        return _super_protocol_sdk_js__WEBPACK_IMPORTED_MODULE_0__.Crypto.decrypt(encryption);
    }
    constructor(){
        this._privateKey = "";
    }
}


/***/ }),

/***/ 9951:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   K: () => (/* binding */ MessagesService)
/* harmony export */ });
class MessagesService {
    constructor(prop){
        this._messages = [];
        this.undecryptedMessageText = "This message cannot be decrypted";
        const { helperService, cipherService } = prop || {};
        this._helpers = helperService;
        this._cipher = cipherService;
    }
    async encryptMessage(message, privateKey) {
        if (!message) throw new Error("Message required for encription service");
        if (typeof message !== "string") throw new Error("Message must be string");
        if (!privateKey) throw new Error("Private key required for encription service");
        return this._cipher.setPrivateKey(privateKey).encrypt(Buffer.from(message, "utf-8").toString("binary"));
    }
    async decryptMessage(encryption, privateKey) {
        if (!encryption) throw new Error("Encription required for encription service");
        if (!privateKey) throw new Error("Private key required for encription service");
        return Buffer.from(await this._cipher.setPrivateKey(privateKey).decrypt(encryption), "binary").toString("utf-8");
    }
    setMessages(messages) {
        this._messages = messages;
        return this;
    }
    async getMessagesDecrypted(connectPassword) {
        return Promise.all(this.messages.map(async ({ encryption, senderName, ...rest })=>{
            const message = await this.decryptMessage(JSON.parse(encryption), connectPassword).catch(()=>this.undecryptedMessageText);
            return {
                ...rest,
                message,
                senderName: this._helpers.textFromBase64(senderName)
            };
        }));
    }
    async getMessageDecrypted(messageDb, connectPassword) {
        if (!connectPassword) throw new Error("Password required");
        if (!messageDb) return null;
        const { encryption, senderName, ...rest } = messageDb;
        const message = await this.decryptMessage(JSON.parse(encryption), connectPassword).catch(()=>this.undecryptedMessageText);
        return {
            ...rest,
            message,
            senderName: this._helpers.textFromBase64(senderName)
        };
    }
    async getMessageDecryptedById(id, connectPassword) {
        if (!connectPassword) throw new Error("Password required");
        if (!id) throw new Error("Message id required");
        const messageFromDb = this._messages.find((message)=>message.id === id);
        if (!messageFromDb) return null;
        return this.getMessageDecrypted(messageFromDb, connectPassword);
    }
    async getMessage(id) {
        if (!id) throw new Error("Message id required");
        const message = this._messages.find((message)=>message.id === id);
        return message || null;
    }
    async getMessages(ids) {
        if (!ids?.length) return [];
        const messages = this._messages.filter((message)=>!ids.includes(message.id));
        return messages || [];
    }
    get messages() {
        return this._messages;
    }
}


/***/ }),

/***/ 9095:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (/* binding */ PubSub)
/* harmony export */ });
class PubSub {
    subscribe(event, listener) {
        this.subscriptions.set(event, (this.subscriptions.get(event) || []).concat(listener));
        return ()=>{
            this.unsubscribe(event, listener);
        };
    }
    unsubscribe(event, listener) {
        const eventListeners = this.subscriptions.get(event);
        if (eventListeners) {
            this.subscriptions.set(event, eventListeners.filter((l)=>l !== listener));
        }
    }
    publish(event, message) {
        const eventListeners = this.subscriptions.get(event);
        if (eventListeners) {
            eventListeners.forEach((listener)=>{
                listener(message);
            });
        }
    }
    clear(event) {
        if (event) {
            this.subscriptions.delete(event);
        } else {
            this.subscriptions.clear();
        }
    }
    constructor(){
        this.subscriptions = new Map();
    }
}


/***/ }),

/***/ 3288:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   M: () => (/* binding */ DbService)
/* harmony export */ });
/* harmony import */ var _clients_ClientService__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7844);
/* harmony import */ var _RoomsService__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9662);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_RoomsService__WEBPACK_IMPORTED_MODULE_1__]);
_RoomsService__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];


class DbService {
    static getInstance() {
        if (DbService.instance) {
            return DbService.instance;
        }
        DbService.instance = new DbService();
        return DbService.instance;
    }
    get isConnected() {
        return this._isConnected;
    }
    async connect() {
        if (this.isConnected) return this;
        this.client = await (0,_clients_ClientService__WEBPACK_IMPORTED_MODULE_0__/* .getClientService */ .S)();
        this.rooms = new _RoomsService__WEBPACK_IMPORTED_MODULE_1__/* .RoomsService */ .L({
            client: this.client
        });
        this._isConnected = true;
        return this;
    }
    async disconnect() {
        if (this.isConnected) {
            await this.client.close();
        }
    }
    async shutdown() {
        await this.client?.shutdown();
    }
    constructor(){
        this._isConnected = false;
    }
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 4373:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   db: () => (/* binding */ db)
/* harmony export */ });
/* harmony import */ var _DbService__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3288);
/* harmony import */ var _globalRef__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9815);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_DbService__WEBPACK_IMPORTED_MODULE_0__]);
_DbService__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];


const dbRef = new _globalRef__WEBPACK_IMPORTED_MODULE_1__/* .GlobalRef */ .w("db"); // nextjs doesn't share instance between routers :/
if (!dbRef.value) {
    dbRef.value = _DbService__WEBPACK_IMPORTED_MODULE_0__/* .DbService */ .M.getInstance();
}
const db = dbRef.value;

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 6573:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   K: () => (/* binding */ MessagesService)
/* harmony export */ });
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6555);
/* harmony import */ var _common_services_CipherService__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1672);
/* harmony import */ var _common_services_MessagesService__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(9951);
/* harmony import */ var _helper_HelperService__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6090);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([uuid__WEBPACK_IMPORTED_MODULE_0__]);
uuid__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];




class MessagesService extends _common_services_MessagesService__WEBPACK_IMPORTED_MODULE_3__/* .MessagesService */ .K {
    constructor(){
        super({
            helperService: new _helper_HelperService__WEBPACK_IMPORTED_MODULE_2__/* .HelperService */ .W(),
            cipherService: new _common_services_CipherService__WEBPACK_IMPORTED_MODULE_1__/* .CipherService */ .u()
        });
    }
    async createMessage(data, connectPassword) {
        if (!connectPassword) throw new Error("Password required");
        const { encryption, senderName, senderId, messageClientId } = data;
        if (!encryption) throw new Error("Encryption required");
        if (!(0,uuid__WEBPACK_IMPORTED_MODULE_0__.validate)(messageClientId)) {
            throw new Error("Bad client id");
        }
        const createdAt = new Date().toISOString();
        const id = (0,uuid__WEBPACK_IMPORTED_MODULE_0__.v1)();
        const messageBeforeSave = {
            encryption,
            id,
            createdAt,
            updatedAt: createdAt,
            senderName: this._helpers.textToBase64(senderName),
            senderId,
            messageClientId
        };
        return messageBeforeSave;
    }
    async deleteMessage(id) {
        if (!id) throw new Error("User id required");
        const index = this._messages.findIndex((user)=>user.id === id);
        if (index === -1) return null;
        const message = this._messages.splice(index, 1)?.[0];
        return message || null;
    }
    async deleteMessages(ids) {
        if (!ids?.length) return this._messages;
        const { newMessages, deletedMessages } = this._messages.reduce((acc, user)=>{
            if (ids.includes(user.id)) {
                return {
                    ...acc,
                    deletedMessages: [
                        ...acc.deletedMessages,
                        user
                    ]
                };
            }
            return {
                ...acc,
                newMessages: [
                    ...acc.newMessages,
                    user
                ]
            };
        }, {
            newMessages: [],
            deletedMessages: []
        });
        this._messages = newMessages;
        return deletedMessages;
    }
    async addMessage(data, connectPassword) {
        if (!connectPassword) throw new Error("Password required");
        const newMessage = await this.createMessage(data, connectPassword);
        this._messages.push(newMessage);
        return newMessage;
    }
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 9662:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   L: () => (/* binding */ RoomsService)
/* harmony export */ });
/* unused harmony export RoomsEvents */
/* harmony import */ var _super_protocol_sdk_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2461);
/* harmony import */ var _super_protocol_sdk_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_super_protocol_sdk_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _utils_crypto__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(277);
/* harmony import */ var _helper_HelperService__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6090);
/* harmony import */ var _MessagesService__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6573);
/* harmony import */ var _UsersService__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(7375);
/* harmony import */ var _PubSub__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(9095);
/* harmony import */ var _jwt__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(7421);
/* harmony import */ var _logger__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(3796);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_MessagesService__WEBPACK_IMPORTED_MODULE_3__]);
_MessagesService__WEBPACK_IMPORTED_MODULE_3__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];








var RoomsEvents;
(function(RoomsEvents) {
    RoomsEvents["ROOM_DELETE"] = "ROOM_DELETE";
    RoomsEvents["MESSAGE_ADD"] = "MESSAGE_ADD";
    RoomsEvents["MESSAGES_ADD"] = "MESSAGES_ADD";
    RoomsEvents["USER_ADD"] = "USER_ADD";
    RoomsEvents["USERS_UPDATE"] = "USERS_UPDATE";
    RoomsEvents["USER_DELETE"] = "USER_DELETE";
})(RoomsEvents || (RoomsEvents = {}));
class RoomsService {
    constructor({ client }){
        this.helpers = new _helper_HelperService__WEBPACK_IMPORTED_MODULE_2__/* .HelperService */ .W();
        this.pubSub = new _PubSub__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z();
        this.eventName = "rooms";
        this.messageSevice = new _MessagesService__WEBPACK_IMPORTED_MODULE_3__/* .MessagesService */ .K();
        this.usersService = new _UsersService__WEBPACK_IMPORTED_MODULE_4__/* .UsersService */ .f();
        this.passwords = new Map();
        this.client = client;
        this.logger = _logger__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z.child({
            class: RoomsService.name
        });
        this.usersService = new _UsersService__WEBPACK_IMPORTED_MODULE_4__/* .UsersService */ .f();
        const cb = async ({ type, message: roomId })=>{
            switch(type){
                case _super_protocol_sdk_js__WEBPACK_IMPORTED_MODULE_0__.CacheEvents.INSTANCES_CHANGED:
                    this.onInstancesChanged(roomId);
                    break;
                case _super_protocol_sdk_js__WEBPACK_IMPORTED_MODULE_0__.CacheEvents.KEY_DELETED:
                    this.publish(RoomsEvents.ROOM_DELETE, {
                        room: null,
                        roomId
                    });
                    break;
                default:
                    break;
            }
        };
        this.client.subscribe((props)=>cb.call(this, props));
    }
    async subscribe(cb) {
        this.pubSub.subscribe(this.eventName, cb);
        return async ()=>{
            this.pubSub.unsubscribe(this.eventName, cb);
        };
    }
    publish(type, message) {
        this.pubSub.publish(this.eventName, {
            type,
            message
        });
    }
    async createRoom(roomName) {
        const deletePassword = (0,_utils_crypto__WEBPACK_IMPORTED_MODULE_1__/* .generateMnemonic */ .OF)();
        const connectPassword = this.helpers.generateHash(deletePassword);
        const createdAt = new Date().toISOString();
        const params = {
            messages: [],
            users: [],
            createdAt,
            updatedAt: createdAt,
            name: this.helpers.textToBase64(roomName)
        };
        await this.updateRoom(connectPassword, params);
        return {
            ...params,
            connectPassword,
            deletePassword
        };
    }
    async updateRoom(connectPassword, content) {
        if (!connectPassword) throw new Error("Password required");
        const roomId = this.helpers.generateHash(connectPassword);
        this.passwords.set(roomId, connectPassword);
        await this.client.set(roomId, content, this.helpers.bufferFromHex(connectPassword));
    }
    getRoomIdByConnectPassword(connectPassword) {
        if (!connectPassword) throw new Error("Password required");
        const roomId = this.helpers.generateHash(connectPassword);
        if (!roomId) throw new Error("Room is not defined");
        return roomId;
    }
    getConnectPasswordByDeletePassword(deletePassword) {
        if (!deletePassword) throw new Error("Password required");
        return this.helpers.generateHash(deletePassword);
    }
    getRoomIdByDeletePassword(deletePassword) {
        if (!deletePassword) throw new Error("Password required");
        return this.helpers.generateHash(this.getConnectPasswordByDeletePassword(deletePassword));
    }
    async getRoomFromAllInstances(connectPassword) {
        if (!connectPassword) {
            throw new Error("Password required");
        }
        const roomId = this.getRoomIdByConnectPassword(connectPassword);
        const instances = await this.client.get(roomId, this.helpers.bufferFromHex(connectPassword));
        if (!instances?.length) return null;
        this.passwords.set(roomId, connectPassword);
        return this.mergeRooms(instances) || null;
    }
    async getRoomFromCurrentInstance(connectPassword) {
        if (!connectPassword) {
            throw new Error("Password required");
        }
        const roomId = this.getRoomIdByConnectPassword(connectPassword);
        const instances = await this.client.get(roomId, this.helpers.bufferFromHex(connectPassword));
        const hasNonNullInstances = instances?.some((instance)=>!!instance);
        if (!instances || !hasNonNullInstances) return null;
        const firstInstance = instances[0];
        if (!firstInstance) {
            const mergedInstance = this.mergeRooms(instances);
            const newDecryptedRoomForCurrentInstance = {
                ...mergedInstance,
                users: []
            };
            await this.updateRoom(connectPassword, newDecryptedRoomForCurrentInstance);
            return newDecryptedRoomForCurrentInstance;
        }
        this.passwords.set(roomId, connectPassword);
        // merging messages is potentially redundant
        if (this.hasUnmergedMessages(firstInstance, instances)) {
            firstInstance.messages = this.mergeMessages(instances.map((instance)=>instance.messages));
        }
        return firstInstance;
    }
    async getRoomToken(connectPassword, userName) {
        if (!connectPassword) throw new Error("Password required");
        if (!userName) throw new Error("User name required");
        const room = await this.getRoomFromCurrentInstance(connectPassword); // do not need to merge
        if (!room) throw new Error("Room is not defined");
        const { createdAt, name } = room;
        return new _jwt__WEBPACK_IMPORTED_MODULE_5__/* .JWTService */ .Z().setPrivateKey(connectPassword).sign({
            createdAt,
            roomName: this.helpers.textFromBase64(name),
            userName,
            connectPassword
        });
    }
    async deleteRoom(deletePassword) {
        if (!deletePassword) throw new Error("Delete password required");
        const roomId = this.getRoomIdByDeletePassword(deletePassword);
        const connectPassword = this.getConnectPasswordByDeletePassword(deletePassword);
        const room = await this.getRoomFromCurrentInstance(connectPassword);
        if (!room) throw new Error("Room is not defined");
        await this.client.delete(roomId);
        this.publish(RoomsEvents.ROOM_DELETE, {
            room,
            roomId
        });
        return true;
    }
    async replaceUsersInRoomByNewUser(params) {
        return this.addUserToRoom(params, true);
    }
    async addUserToRoom(params, replace = false) {
        const { connectPassword, userInfo } = params;
        if (!userInfo?.name) throw new Error("User name required");
        if (!connectPassword) throw new Error("Password required");
        const roomId = this.getRoomIdByConnectPassword(connectPassword);
        const room = await this.getRoomFromCurrentInstance(connectPassword);
        if (!room) throw new Error("Room is not defined");
        this.usersService.setUsers(replace ? [] : room.users);
        const newUser = await this.usersService.addUser(params);
        await this.updateRoom(connectPassword, {
            ...room,
            users: this.usersService.users,
            updatedAt: new Date().toISOString()
        });
        this.publish(RoomsEvents.USER_ADD, {
            user: newUser,
            roomId
        });
        return newUser;
    }
    async addMessageToRoom(message, connectPassword) {
        if (!connectPassword) throw new Error("Password required");
        const roomId = this.getRoomIdByConnectPassword(connectPassword);
        const room = await this.getRoomFromCurrentInstance(connectPassword);
        if (!room) return false;
        this.messageSevice.setMessages(room?.messages);
        const savedMessage = await this.messageSevice.addMessage(message, connectPassword);
        await this.updateRoom(connectPassword, {
            ...room,
            messages: this.messageSevice.messages,
            updatedAt: new Date().toISOString()
        });
        this.publish(RoomsEvents.MESSAGE_ADD, {
            message: savedMessage,
            roomId
        });
        return true;
    }
    async getUserByIdInRoom(connectPassword, userId) {
        if (!connectPassword) throw new Error("Password id required");
        const room = await this.getRoomFromCurrentInstance(connectPassword);
        return (room?.users || []).find(({ id })=>id === userId) || null;
    }
    async deleteUserFromRoom(userId, connectPassword) {
        if (!userId) throw new Error("User id required");
        const roomId = this.getRoomIdByConnectPassword(connectPassword);
        const room = await this.getRoomFromCurrentInstance(connectPassword);
        if (!room) throw new Error("Room is not defined");
        this.usersService.setUsers(room?.users);
        const deletedUser = this.usersService.deleteUser(userId);
        await this.updateRoom(connectPassword, {
            ...room,
            users: this.usersService.users,
            updatedAt: new Date().toISOString()
        });
        this.publish(RoomsEvents.USER_DELETE, {
            user: deletedUser,
            roomId
        });
        return true;
    }
    async onInstancesChanged(roomId) {
        const connectPassword = this.passwords.get(roomId);
        if (!connectPassword) {
            this.logger.info({
                roomId
            }, "Password not found");
            return;
        }
        const updatedMessagesAndUsers = await this.getUpdatedMessagesAndUsers(connectPassword);
        if (!updatedMessagesAndUsers) return;
        const { messagesAdded, usersAll } = updatedMessagesAndUsers;
        if (messagesAdded.length) {
            this.publish(RoomsEvents.MESSAGES_ADD, {
                messages: messagesAdded,
                roomId
            });
        }
        this.publish(RoomsEvents.USERS_UPDATE, {
            users: usersAll,
            roomId
        });
    }
    async getUpdatedMessagesAndUsers(connectPassword) {
        if (!connectPassword) throw new Error("Password id required");
        const roomId = this.getRoomIdByConnectPassword(connectPassword);
        const instances = await this.client.get(roomId, this.helpers.bufferFromHex(connectPassword));
        if (!instances) return null;
        const [currentInstance, ...otherInstances] = instances;
        if (!currentInstance) return null;
        if (!otherInstances?.length) return null;
        const messagesAdded = this.findAddedMessages(currentInstance.messages, otherInstances.flatMap((instance)=>instance?.messages || []));
        const usersAll = this.mergeUsers([
            currentInstance.users,
            otherInstances.flatMap((instance)=>instance?.users || [])
        ]);
        return {
            messagesAdded,
            usersAll
        };
    }
    async isRoomExists(roomId) {
        return this.client.has(roomId);
    }
    findAddedMessages(currMessages, allMessages) {
        const map = new Set(currMessages.map((copy)=>copy?.id));
        return allMessages.filter((newMessage)=>!map.has(newMessage?.id));
    }
    hasUnmergedMessages(firstInstance, otherInstances) {
        const firstInstanceMessagesUpdate = new Date(firstInstance.messages.at(-1)?.updatedAt || 0).getTime();
        const someInstancesUpdated = otherInstances.some((instance)=>{
            const otherInstanceMessagesUpdate = new Date(instance.messages.at(-1)?.updatedAt || 0).getTime();
            return otherInstanceMessagesUpdate > firstInstanceMessagesUpdate;
        });
        return someInstancesUpdated;
    }
    mergeRooms(copies) {
        if (!copies?.length) {
            return null;
        }
        const result = copies.filter((room)=>!!room)[0]; // find the first null room
        if (!result) return null;
        return {
            ...result,
            messages: this.mergeMessages(copies.map((copy)=>copy?.messages || [])),
            users: this.mergeUsers(copies.map((copy)=>copy?.users || []))
        };
    }
    mergeMessages(copies) {
        const map = new Map(copies.flat().map((copy)=>[
                copy.id,
                copy
            ]));
        return Array.from(map.values()).sort((a, b)=>{
            if (a?.createdAt === b?.createdAt) {
                return a.id > b.id ? 1 : -1;
            }
            return new Date(a?.createdAt).getTime() - new Date(b?.createdAt).getTime();
        });
    }
    mergeUsers(copies) {
        const map = new Map(copies.flat().map((copy)=>[
                copy.id,
                copy
            ]));
        return Array.from(map.values());
    }
    async deleteAllUsers(connectPassword) {
        if (!connectPassword) throw new Error("Password id required");
        const room = await this.getRoomFromCurrentInstance(connectPassword);
        if (!room) return;
        await this.updateRoom(connectPassword, {
            ...room,
            users: []
        });
    }
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 7375:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  f: () => (/* binding */ UsersService)
});

// EXTERNAL MODULE: ./src/common/services/CipherService.ts
var CipherService = __webpack_require__(1672);
;// CONCATENATED MODULE: ./src/common/services/UsersService.ts
class UsersService_UsersService {
    constructor(prop){
        this._users = [];
        const { helperService, cipherService } = prop || {};
        this._helpers = helperService;
        this._cipherService = cipherService;
    }
    setUsers(users) {
        this._users = users;
        return this;
    }
    getUsersDb() {
        return this._users;
    }
    getUsersResponse() {
        return this._users.map(({ name, ...rest })=>({
                ...rest,
                name: this._helpers.textFromBase64(name)
            }));
    }
    getUserResponseById(id) {
        if (!id) throw new Error("User id required");
        const user = this._users.find(({ id: userId })=>id === userId);
        if (!user) return null;
        return {
            ...user,
            name: this._helpers.textFromBase64(user?.name)
        };
    }
    getUserDbById(id) {
        if (!id) throw new Error("User id required");
        const user = this._users.find(({ id: userId })=>id === userId);
        return user || null;
    }
    getUsersResponseByIds(ids) {
        if (!ids?.length) {
            throw new Error("Users ids are empty");
        }
        return this._users.filter((user)=>ids.includes(user.id)).map(({ name, ...rest })=>({
                ...rest,
                name: this._helpers.textFromBase64(name)
            }));
    }
    getUsersDbByIds(ids) {
        if (!ids?.length) {
            throw new Error("Users ids are empty");
        }
        return this._users.filter((user)=>ids.includes(user.id));
    }
    get users() {
        return this._users;
    }
}

// EXTERNAL MODULE: ./src/server/services/helper/HelperService.ts
var HelperService = __webpack_require__(6090);
;// CONCATENATED MODULE: ./src/server/services/db/UsersService.ts



class UsersService extends UsersService_UsersService {
    constructor(){
        super({
            helperService: new HelperService/* HelperService */.W(),
            cipherService: new CipherService/* CipherService */.u()
        });
    }
    async createUser(params) {
        const { userInfo, connectPassword } = params;
        const { token } = userInfo || {};
        if (!userInfo) throw new Error("Profile required");
        if (!token) throw new Error("Token required");
        if (!connectPassword) throw new Error("Password required");
        const createdAt = new Date().toISOString();
        const id = this._helpers.generateHash();
        const userBeforeSave = {
            id,
            name: this._helpers.textToBase64(userInfo.name),
            token: this._helpers.generateHash(token),
            createdAt,
            updatedAt: createdAt
        };
        return userBeforeSave;
    }
    async addUser(params) {
        const { userInfo, connectPassword } = params;
        if (!userInfo) throw new Error("Profile required");
        if (!connectPassword) throw new Error("Password required");
        const newUser = await this.createUser(params);
        this._users.push(newUser);
        return newUser;
    }
    async addUsers(usersInfo, connectPassword) {
        if (!usersInfo?.length) return [];
        if (!connectPassword) throw new Error("Password required");
        const newUsers = await Promise.all(usersInfo.map(async (userInfo)=>this.createUser({
                userInfo,
                connectPassword
            })));
        this._users.push(...newUsers);
        return newUsers;
    }
    async deleteUser(id) {
        if (!id) throw new Error("User id required");
        const index = this._users.findIndex((user)=>user.id === id);
        if (index === -1) return null;
        const deletedUser = this._users.splice(index, 1)?.[0];
        return deletedUser || null;
    }
    async deleteUsers(ids) {
        if (!ids?.length) return this._users;
        const { newUsers, deletedUsers } = this._users.reduce((acc, user)=>{
            if (ids.includes(user.id)) {
                return {
                    ...acc,
                    deletedUsers: [
                        ...acc.deletedUsers,
                        user
                    ]
                };
            }
            return {
                ...acc,
                newUsers: [
                    ...acc.newUsers,
                    user
                ]
            };
        }, {
            newUsers: [],
            deletedUsers: []
        });
        this._users = newUsers;
        return deletedUsers;
    }
}


/***/ }),

/***/ 7844:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  S: () => (/* binding */ getClientService)
});

// EXTERNAL MODULE: external "node:perf_hooks"
var external_node_perf_hooks_ = __webpack_require__(8846);
// EXTERNAL MODULE: external "@super-protocol/dto-js"
var dto_js_ = __webpack_require__(4005);
;// CONCATENATED MODULE: ./src/server/services/db/clients/types.ts
var Clients;
(function(Clients) {
    Clients["ORBITDB"] = "ORBITDB";
    Clients["STORJ"] = "STORJ";
    Clients["S3"] = "S3";
})(Clients || (Clients = {}));

// EXTERNAL MODULE: external "@super-protocol/sdk-js"
var sdk_js_ = __webpack_require__(2461);
// EXTERNAL MODULE: ./src/server/services/logger.ts
var logger = __webpack_require__(3796);
;// CONCATENATED MODULE: ./src/server/services/db/clients/StorjClientService.ts


class StorjClientService {
    constructor(){
        this._client = null;
        this.logger = logger/* default */.Z.child({
            class: StorjClientService.name
        });
    }
    async connect(storageAccess, config) {
        this._client = new sdk_js_.StorjAdapter(storageAccess, config);
        return this;
    }
    subscribe(cb) {
        return this._client?.subscribe(cb);
    }
    async get(key, encryptionKey) {
        return this._client?.get(key, encryptionKey);
    }
    async has(key) {
        return !!this._client && this._client.has(key);
    }
    async set(key, value, encryptionKey) {
        return this._client?.set(key, value, encryptionKey);
    }
    async delete(key) {
        return this._client?.del(key);
    }
    async close() {
        this._client?.stop();
        this._client = null;
    }
    async shutdown() {
        await this._client?.shutdown();
    }
}

// EXTERNAL MODULE: ./src/server/config.ts
var server_config = __webpack_require__(3434);
;// CONCATENATED MODULE: ./src/server/services/db/clients/ClientService.ts





// key/value services
const getClientService = async ()=>{
    const config = (0,server_config/* getConfig */.i)();
    const client = config.CLIENT;
    const clientConfig = {
        ...config.DOWNLOADER,
        performance: external_node_perf_hooks_.performance
    };
    switch(client){
        case Clients.STORJ:
            return new StorjClientService().connect({
                storageType: dto_js_.StorageType.StorJ,
                credentials: config.STORJ_CREDENTIALS
            }, clientConfig);
        case Clients.S3:
            return new StorjClientService().connect({
                storageType: dto_js_.StorageType.S3,
                credentials: config.S3_CREDENTIALS
            }, clientConfig);
        default:
            throw new Error(`Unknown client ${client}`);
    }
};


/***/ }),

/***/ 7565:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   db: () => (/* reexport safe */ _DbServiceShare__WEBPACK_IMPORTED_MODULE_0__.db)
/* harmony export */ });
/* harmony import */ var _DbServiceShare__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4373);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_DbServiceShare__WEBPACK_IMPORTED_MODULE_0__]);
_DbServiceShare__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];


__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 9815:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   w: () => (/* binding */ GlobalRef)
/* harmony export */ });
class GlobalRef {
    constructor(uniqueName){
        this.sym = Symbol.for(uniqueName);
    }
    get value() {
        return global[this.sym];
    }
    set value(value) {
        global[this.sym] = value;
    }
}


/***/ }),

/***/ 277:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   OF: () => (/* binding */ generateMnemonic)
/* harmony export */ });
/* unused harmony exports generateECIESKeys, validateMnemonic, generateRandomKeys */
/* harmony import */ var crypto__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6113);
/* harmony import */ var crypto__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(crypto__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var bip39__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6176);
/* harmony import */ var bip39__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(bip39__WEBPACK_IMPORTED_MODULE_1__);


const generateMnemonic = ()=>(0,bip39__WEBPACK_IMPORTED_MODULE_1__.generateMnemonic)(256);
const generateECIESKeys = (mnemonic)=>{
    const entropy = mnemonicToEntropyBip39(mnemonic);
    const privateKeyBuffer = Buffer.from(entropy, "hex");
    const ecdh = createECDH("secp256k1");
    ecdh.setPrivateKey(privateKeyBuffer);
    const publicKeyBuffer = ecdh.getPublicKey();
    const privateKeyBase64 = privateKeyBuffer.toString("base64");
    const publicKeyBase64 = publicKeyBuffer.toString("base64");
    return {
        privateKeyBase64,
        publicKeyBase64,
        privateKeyBuffer,
        publicKeyBuffer,
        mnemonic
    };
};
const validateMnemonic = (mnemonic)=>{
    let validate = validateMnemonicBip39(mnemonic);
    if (!validate) return validate;
    try {
        generateECIESKeys(mnemonic);
    } catch (e) {
        validate = false;
    }
    return validate;
};
const generateRandomKeys = ()=>{
    const ecdh = createECDH("secp256k1");
    ecdh.generateKeys();
    const privateKeyBuffer = ecdh.getPrivateKey();
    const publicKeyBuffer = ecdh.getPublicKey();
    const privateKeyBase64 = privateKeyBuffer.toString("base64");
    const publicKeyBase64 = publicKeyBuffer.toString("base64");
    return {
        privateKeyBuffer,
        publicKeyBuffer,
        privateKeyBase64,
        publicKeyBase64
    };
};


/***/ })

};
;