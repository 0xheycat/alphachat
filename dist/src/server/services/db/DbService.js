"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DbService = void 0;
const ClientService_1 = require("./clients/ClientService");
const RoomsService_1 = require("./RoomsService");
class DbService {
    constructor() {
        this._isConnected = false;
    }
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
        if (this.isConnected)
            return this;
        this.client = await (0, ClientService_1.getClientService)();
        this.rooms = new RoomsService_1.RoomsService({ client: this.client });
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
}
exports.DbService = DbService;
