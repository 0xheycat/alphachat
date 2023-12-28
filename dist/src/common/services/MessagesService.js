"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MessagesService = void 0;
class MessagesService {
    constructor(prop) {
        this._messages = [];
        this.undecryptedMessageText = 'This message cannot be decrypted';
        const { helperService, cipherService } = prop || {};
        this._helpers = helperService;
        this._cipher = cipherService;
    }
    async encryptMessage(message, privateKey) {
        if (!message)
            throw new Error('Message required for encription service');
        if (typeof message !== 'string')
            throw new Error('Message must be string');
        if (!privateKey)
            throw new Error('Private key required for encription service');
        return this._cipher.setPrivateKey(privateKey).encrypt(Buffer.from(message, 'utf-8').toString('binary'));
    }
    async decryptMessage(encryption, privateKey) {
        if (!encryption)
            throw new Error('Encription required for encription service');
        if (!privateKey)
            throw new Error('Private key required for encription service');
        return Buffer.from(await this._cipher.setPrivateKey(privateKey).decrypt(encryption), 'binary').toString('utf-8');
    }
    setMessages(messages) {
        this._messages = messages;
        return this;
    }
    async getMessagesDecrypted(connectPassword) {
        return Promise.all(this.messages.map(async ({ encryption, senderName, ...rest }) => {
            const message = await this.decryptMessage(JSON.parse(encryption), connectPassword).catch(() => this.undecryptedMessageText);
            return {
                ...rest,
                message,
                senderName: this._helpers.textFromBase64(senderName),
            };
        }));
    }
    async getMessageDecrypted(messageDb, connectPassword) {
        if (!connectPassword)
            throw new Error('Password required');
        if (!messageDb)
            return null;
        const { encryption, senderName, ...rest } = messageDb;
        const message = await this.decryptMessage(JSON.parse(encryption), connectPassword).catch(() => this.undecryptedMessageText);
        return {
            ...rest,
            message,
            senderName: this._helpers.textFromBase64(senderName),
        };
    }
    async getMessageDecryptedById(id, connectPassword) {
        if (!connectPassword)
            throw new Error('Password required');
        if (!id)
            throw new Error('Message id required');
        const messageFromDb = this._messages.find((message) => message.id === id);
        if (!messageFromDb)
            return null;
        return this.getMessageDecrypted(messageFromDb, connectPassword);
    }
    async getMessage(id) {
        if (!id)
            throw new Error('Message id required');
        const message = this._messages.find((message) => message.id === id);
        return message || null;
    }
    async getMessages(ids) {
        if (!ids?.length)
            return [];
        const messages = this._messages.filter((message) => !ids.includes(message.id));
        return messages || [];
    }
    get messages() {
        return this._messages;
    }
}
exports.MessagesService = MessagesService;
