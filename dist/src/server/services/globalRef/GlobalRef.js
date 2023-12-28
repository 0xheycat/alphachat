"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GlobalRef = void 0;
class GlobalRef {
    constructor(uniqueName) {
        this.sym = Symbol.for(uniqueName);
    }
    get value() {
        return global[this.sym];
    }
    set value(value) {
        global[this.sym] = value;
    }
}
exports.GlobalRef = GlobalRef;
