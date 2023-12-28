"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsersService = void 0;
const CipherService_1 = require("../../../common/services/CipherService");
const UsersService_1 = require("../../../common/services/UsersService");
const HelperService_1 = require("../helper/HelperService");
class UsersService extends UsersService_1.UsersService {
    constructor() {
        super({ helperService: new HelperService_1.HelperService(), cipherService: new CipherService_1.CipherService() });
    }
    async createUser(params) {
        const { userInfo, connectPassword } = params;
        const { token } = userInfo || {};
        if (!userInfo)
            throw new Error('Profile required');
        if (!token)
            throw new Error('Token required');
        if (!connectPassword)
            throw new Error('Password required');
        const createdAt = new Date().toISOString();
        const id = this._helpers.generateHash();
        const userBeforeSave = {
            id,
            name: this._helpers.textToBase64(userInfo.name),
            token: this._helpers.generateHash(token),
            createdAt,
            updatedAt: createdAt,
        };
        return userBeforeSave;
    }
    async addUser(params) {
        const { userInfo, connectPassword } = params;
        if (!userInfo)
            throw new Error('Profile required');
        if (!connectPassword)
            throw new Error('Password required');
        const newUser = await this.createUser(params);
        this._users.push(newUser);
        return newUser;
    }
    async addUsers(usersInfo, connectPassword) {
        if (!usersInfo?.length)
            return [];
        if (!connectPassword)
            throw new Error('Password required');
        const newUsers = await Promise.all(usersInfo.map(async (userInfo) => this.createUser({ userInfo, connectPassword })));
        this._users.push(...newUsers);
        return newUsers;
    }
    async deleteUser(id) {
        if (!id)
            throw new Error('User id required');
        const index = this._users.findIndex((user) => user.id === id);
        if (index === -1)
            return null;
        const deletedUser = this._users.splice(index, 1)?.[0];
        return deletedUser || null;
    }
    async deleteUsers(ids) {
        if (!ids?.length)
            return this._users;
        const { newUsers, deletedUsers } = this._users.reduce((acc, user) => {
            if (ids.includes(user.id)) {
                return {
                    ...acc,
                    deletedUsers: [...acc.deletedUsers, user],
                };
            }
            return {
                ...acc,
                newUsers: [...acc.newUsers, user],
            };
        }, { newUsers: [], deletedUsers: [] });
        this._users = newUsers;
        return deletedUsers;
    }
}
exports.UsersService = UsersService;
