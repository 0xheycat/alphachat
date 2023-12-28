"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const next_1 = __importDefault(require("next"));
const v8_1 = require("v8");
const http_1 = __importDefault(require("http"));
const https_1 = __importDefault(require("https"));
const worker_threads_1 = require("worker_threads");
const node_url_1 = require("node:url");
const socket_io_1 = require("socket.io");
const SocketService_1 = require("./src/server/services/socket/SocketService");
const db_1 = require("./src/server/services/db");
const next_config_1 = __importDefault(require("./next.config"));
const logger_1 = __importDefault(require("./src/server/services/logger"));
const env = process.env.APP_NODE_ENV || 'production';
const dev = env !== 'production';
const nextApp = (0, next_1.default)({
    dev,
    dir: '.',
    ...(dev ? {} : { dir: (0, node_url_1.fileURLToPath)(new URL('..', (0, node_url_1.pathToFileURL)(__filename).toString())), conf: next_config_1.default }),
});
const serverLogger = logger_1.default.child({ class: 'server' });
serverLogger.info({ heapInfo: (0, v8_1.getHeapStatistics)() }, 'Heap info');
const initTerminationHandler = (server, socket) => {
    let isTerminationTriggered = false;
    const terminationHandler = async () => {
        if (isTerminationTriggered) {
            serverLogger.info('Termination is already triggered. Skiping...');
            return;
        }
        isTerminationTriggered = true;
        serverLogger.info('Termination signal received. Stopping...');
        socket.io.close();
        await socket.removeUsersBySockets();
        server.close(async () => {
            serverLogger.info('Server closed');
            await db_1.db.shutdown().catch((error) => serverLogger.error({ error }, 'Error on db.shutdown'));
            process.exit(0);
        });
    };
    const handledSignals = ['SIGINT', 'SIGTERM']; // SIGKILL terminate server
    if (worker_threads_1.isMainThread) {
        handledSignals.forEach((signal) => {
            process.on(signal, terminationHandler);
        });
    }
    else {
        worker_threads_1.parentPort?.on('message', (message) => {
            if (handledSignals.includes(message)) {
                terminationHandler();
            }
        });
    }
};
nextApp
    .prepare()
    .then(async () => {
    const handler = nextApp.getRequestHandler();
    const port = parseInt(process.env.HTTPS_PORT || '', 10) || 3000;
    const server = dev || !process.env.TLS_CERT || !process.env.TLS_KEY
        ? http_1.default.createServer(handler)
        : https_1.default.createServer({
            rejectUnauthorized: true,
            cert: process.env.TLS_CERT,
            key: process.env.TLS_KEY,
        }, handler);
    await db_1.db.connect();
    const socketService = new SocketService_1.SocketService({ db: db_1.db, io: new socket_io_1.Server(server) });
    initTerminationHandler(server, socketService);
    server.listen(port, () => {
        serverLogger.info({ port }, 'Next.js server started to listen');
    });
})
    .catch((err) => {
    serverLogger.error({ err }, 'Next.js server failed to start');
});
