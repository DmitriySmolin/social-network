"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
exports.__esModule = true;
exports.updateObjectInArray = void 0;
exports.updateObjectInArray = function (items, itemId, objPropName, newObjProps) {
    return items.map(function (u) {
        if (u[objPropName] === itemId) {
            return __assign(__assign({}, u), newObjProps);
        }
        return u;
    });
};
