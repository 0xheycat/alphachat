"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsersService = void 0;
class UsersService {
    constructor(prop) {
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
        return this._users.map(({ name, ...rest }) => ({
            ...rest,
            name: this._helpers.textFromBase64(name),
        }));
    }
    getUserResponseById(id) {
        if (!id)
            throw new Error('User id required');
        const user = this._users.find(({ id: userId }) => id === userId);
        if (!user)
            return null;
        return {
            ...user,
            name: this._helpers.textFromBase64(user?.name),
        };
    }
    getUserDbById(id) {
        if (!id)
            throw new Error('User id required');
        const user = this._users.find(({ id: userId }) => id === userId);
        return user || null;
    }
    getUsersResponseByIds(ids) {
        if (!ids?.length) {
            throw new Error('Users ids are empty');
        }
        return this._users
            .filter((user) => ids.includes(user.id))
            .map(({ name, ...rest }) => ({ ...rest, name: this._helpers.textFromBase64(name) }));
    }
    getUsersDbByIds(ids) {
        if (!ids?.length) {
            throw new Error('Users ids are empty');
        }
        return this._users
            .filter((user) => ids.includes(user.id));
    }
    get users() {
        return this._users;
    }
}
exports.UsersService = UsersService;
