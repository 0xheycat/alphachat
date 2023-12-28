"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Queue = void 0;
class Queue {
    constructor() {
        this.queue = [];
        this.running = false;
    }
    enqueue(callback) {
        this.queue.push(callback);
        this.processQueue();
    }
    async processQueue() {
        if (this.running)
            return;
        this.running = true;
        while (this.queue.length > 0) {
            const callback = this.queue.shift();
            try {
                await callback?.();
            }
            catch (error) {
                console.error('Error executing callback:', error);
            }
        }
        this.running = false;
    }
}
exports.Queue = Queue;
