"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteKeysFromObject = exports.getPathFromUrl = exports.getQSFromObj = exports.isRelative = exports.parseJwt = exports.isSSR = exports.getAuthorizationHeader = void 0;
const getAuthorizationHeader = (token) => (token ? `Bearer ${token}` : '');
exports.getAuthorizationHeader = getAuthorizationHeader;
const isSSR = () => typeof window === 'undefined';
exports.isSSR = isSSR;
function parseJwt(token) {
    if (!token)
        return null;
    return JSON.parse(Buffer.from(token.split('.')[1], 'base64').toString());
}
exports.parseJwt = parseJwt;
const isRelative = (path) => path && /^\/[a-zA-Z]/.test(path);
exports.isRelative = isRelative;
const getQSFromObj = (params) => {
    const qs = Object
        .entries(params)
        .filter(([, value]) => value)
        .map(([key, value]) => `${encodeURIComponent(key)}=${encodeURIComponent(value)}`)
        .join('&');
    return qs ? `?${qs}` : '';
};
exports.getQSFromObj = getQSFromObj;
const getPathFromUrl = (url) => {
    if (!url)
        return '';
    return url.split('?')[0] || '';
};
exports.getPathFromUrl = getPathFromUrl;
const deleteKeysFromObject = (obj, keys) => {
    if (obj instanceof Object && Array.isArray(keys) && keys.length) {
        return keys.reduce((acc, key) => {
            delete acc[key];
            return acc;
        }, { ...obj });
    }
    return obj;
};
exports.deleteKeysFromObject = deleteKeysFromObject;
