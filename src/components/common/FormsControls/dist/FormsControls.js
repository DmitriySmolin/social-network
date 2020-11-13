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
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
exports.__esModule = true;
exports.createField = exports.Input = exports.Textarea = exports.FormControl = void 0;
var react_1 = require("react");
var redux_form_1 = require("redux-form");
var FormsControls_module_css_1 = require("./FormsControls.module.css");
exports.FormControl = function (_a) {
    var input = _a.input, _b = _a.meta, touched = _b.touched, error = _b.error, children = _a.children;
    var hasError = touched && error;
    return (react_1["default"].createElement("div", { className: FormsControls_module_css_1["default"].formControl + " " + (hasError ? FormsControls_module_css_1["default"].error : '') },
        react_1["default"].createElement("div", null, children),
        hasError ? react_1["default"].createElement("span", null, error) : ''));
};
exports.Textarea = function (props) {
    var input = props.input, meta = props.meta, child = props.child, restProps = __rest(props, ["input", "meta", "child"]);
    return (react_1["default"].createElement(exports.FormControl, __assign({}, props),
        react_1["default"].createElement("textarea", __assign({}, input, restProps))));
};
exports.Input = function (props) {
    var input = props.input, meta = props.meta, child = props.child, restProps = __rest(props, ["input", "meta", "child"]);
    return (react_1["default"].createElement(exports.FormControl, __assign({}, props),
        react_1["default"].createElement("input", __assign({}, input, restProps))));
};
exports.createField = function (placeholder, name, validators, component, type, text) {
    if (type === void 0) { type = {}; }
    if (text === void 0) { text = ''; }
    return (react_1["default"].createElement("div", null,
        react_1["default"].createElement(redux_form_1.Field, __assign({}, type, { placeholder: placeholder, name: name, validate: validators, component: component })),
        text));
};
