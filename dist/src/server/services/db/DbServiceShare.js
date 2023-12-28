"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.db = void 0;
const DbService_1 = require("./DbService");
const globalRef_1 = require("../globalRef");
const dbRef = new globalRef_1.GlobalRef('db'); // nextjs doesn't share instance between routers :/
if (!dbRef.value) {
    dbRef.value = DbService_1.DbService.getInstance();
}
exports.db = dbRef.value;
