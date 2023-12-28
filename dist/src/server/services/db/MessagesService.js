"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MessagesService = void 0;
const uuid_1 = require("uuid");
const CipherService_1 = require("../../../common/services/CipherService");
const MessagesService_1 = require("../../../common/services/MessagesService");
const HelperService_1 = require("../helper/HelperService");
class MessagesService extends MessagesService_1.MessagesService {
    constructor() {
        super({ helperService: new HelperService_1.HelperService(), cipherService: new CipherService_1.CipherService() });
    }
    async createMessage(data, connectPassword) {
        if (!connectPassword)
            throw new Error('Password required');
        const { encryption, senderName, senderId, messageClientId, } = data;
        if (!encryption)
            throw new Error('Encryption required');
        if (!(0, uuid_1.validate)(messageClientId)) {
            throw new Error('Bad client id');
        }
        const createdAt = new Date().toISOString();
        const id = (0, uuid_1.v1)();
        const messageBeforeSave = {
            encryption,
            id,
            createdAt,
            updatedAt: createdAt,
            senderName: this._helpers.textToBase64(senderName),
            senderId,
            messageClientId,
        };
        return messageBeforeSave;
    }
    async deleteMessage(id) {
        if (!id)
            throw new Error('User id required');
        const index = this._messages.findIndex((user) => user.id === id);
        if (index === -1)
            return null;
        const message = this._messages.splice(index, 1)?.[0];
        return message || null;
    }
    async deleteMessages(ids) {
        if (!ids?.length)
            return this._messages;
        const { newMessages, deletedMessages } = this._messages.reduce((acc, user) => {
            if (ids.includes(user.id)) {
                return {
                    ...acc,
                    deletedMessages: [...acc.deletedMessages, user],
                };
            }
            return {
                ...acc,
                newMessages: [...acc.newMessages, user],
            };
        }, { newMessages: [], deletedMessages: [] });
        this._messages = newMessages;
        return deletedMessages;
    }
    async addMessage(data, connectPassword) {
        if (!connectPassword)
            throw new Error('Password required');
        const newMessage = await this.createMessage(data, connectPassword);
        this._messages.push(newMessage);
        return newMessage;
    }
}
exports.MessagesService = MessagesService;
