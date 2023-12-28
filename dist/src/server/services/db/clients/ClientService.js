"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getClientService = void 0;
const node_perf_hooks_1 = require("node:perf_hooks");
const dto_js_1 = require("@super-protocol/dto-js");
const types_1 = require("./types");
const StorjClientService_1 = require("./StorjClientService");
const config_1 = require("../../../config");
// key/value services
const getClientService = async () => {
    const config = (0, config_1.getConfig)();
    const client = config.CLIENT;
    const clientConfig = {
        ...config.DOWNLOADER,
        performance: node_perf_hooks_1.performance,
    };
    switch (client) {
        case types_1.Clients.STORJ:
            return new StorjClientService_1.StorjClientService().connect({
                storageType: dto_js_1.StorageType.StorJ,
                credentials: config.STORJ_CREDENTIALS,
            }, clientConfig);
        case types_1.Clients.S3:
            return new StorjClientService_1.StorjClientService().connect({
                storageType: dto_js_1.StorageType.S3,
                credentials: config.S3_CREDENTIALS,
            }, clientConfig);
        default:
            throw new Error(`Unknown client ${client}`);
    }
};
exports.getClientService = getClientService;
