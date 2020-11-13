"use strict";
exports.__esModule = true;
var react_1 = require("react");
var Users_module_css_1 = require("./Users.module.css");
var user_png_1 = require("../../assets/images/user.png");
var react_router_dom_1 = require("react-router-dom");
var User = function (_a) {
    var u = _a.u, isArrayFollowing = _a.isArrayFollowing, followThunk = _a.followThunk, unfollowThunk = _a.unfollowThunk;
    return (react_1["default"].createElement("div", { key: u.id },
        react_1["default"].createElement("span", null,
            react_1["default"].createElement("div", null,
                react_1["default"].createElement(react_router_dom_1.NavLink, { to: "profile/" + u.id },
                    react_1["default"].createElement("img", { src: u.photos.small !== null ? u.photos.small : user_png_1["default"], alt: "", className: Users_module_css_1["default"].photo }))),
            react_1["default"].createElement("div", null, u.followed ? (react_1["default"].createElement("button", { onClick: function () { return unfollowThunk(u.id); }, disabled: isArrayFollowing.some(function (userId) { return userId === u.id; }) }, "UnFollow")) : (react_1["default"].createElement("button", { onClick: function () { return followThunk(u.id); }, disabled: isArrayFollowing.some(function (userId) { return userId === u.id; }) }, "Follow")))),
        react_1["default"].createElement("span", null,
            react_1["default"].createElement("span", null,
                react_1["default"].createElement("div", null, u.name),
                react_1["default"].createElement("div", null, u.status)),
            react_1["default"].createElement("span", null,
                react_1["default"].createElement("div", null, 'u.location.country'),
                react_1["default"].createElement("div", null, 'u.location.city')))));
};
exports["default"] = User;
