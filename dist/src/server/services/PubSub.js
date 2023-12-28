"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class PubSub {
    constructor() {
        this.subscriptions = new Map();
    }
    subscribe(event, listener) {
        this.subscriptions.set(event, (this.subscriptions.get(event) || []).concat(listener));
        return () => {
            this.unsubscribe(event, listener);
        };
    }
    unsubscribe(event, listener) {
        const eventListeners = this.subscriptions.get(event);
        if (eventListeners) {
            this.subscriptions.set(event, eventListeners.filter((l) => l !== listener));
        }
    }
    publish(event, message) {
        const eventListeners = this.subscriptions.get(event);
        if (eventListeners) {
            eventListeners.forEach((listener) => {
                listener(message);
            });
        }
    }
    clear(event) {
        if (event) {
            this.subscriptions.delete(event);
        }
        else {
            this.subscriptions.clear();
        }
    }
}
exports.default = PubSub;
