"use strict";
exports.__esModule = true;
var react_1 = require("react");
var Preloader_1 = require("../common/Preloader/Preloader");
var Paginator_module_css_1 = require("./Paginator.module.css");
var Paginator = function (_a) {
    var totalUsersCount = _a.totalUsersCount, pageSize = _a.pageSize, isFetching = _a.isFetching, currentPage = _a.currentPage, onSetCurrentPage = _a.onSetCurrentPage;
    var pageCount = Math.ceil(totalUsersCount / pageSize);
    var pages = [];
    for (var i = 1; i <= pageCount; i += 1) {
        pages.push(i);
    }
    return (react_1["default"].createElement(react_1["default"].Fragment, null,
        isFetching ? react_1["default"].createElement(Preloader_1["default"], null) : null,
        react_1["default"].createElement("div", { className: Paginator_module_css_1["default"].Users }, pages.map(function (p) { return (react_1["default"].createElement("span", { key: p, className: currentPage === p ? Paginator_module_css_1["default"].selectPage : '', onClick: function () { return onSetCurrentPage(p); } }, p)); }))));
};
exports["default"] = Paginator;
