"use strict";
exports.__esModule = true;
var react_1 = require("react");
var Paginator_1 = require("../Paginator/Paginator");
var User_1 = require("./User");
var Users = function (_a) {
    // let pageCount = Math.ceil(totalUsersCount / pageSize);
    // let pages = [];
    // for (let i = 1; i <= pageCount; i += 1) {
    //   pages.push(i);
    // }
    var users = _a.users, pageSize = _a.pageSize, totalUsersCount = _a.totalUsersCount, currentPage = _a.currentPage, isFetching = _a.isFetching, isArrayFollowing = _a.isArrayFollowing, onSetCurrentPage = _a.onSetCurrentPage, followThunk = _a.followThunk, unfollowThunk = _a.unfollowThunk;
    return (react_1["default"].createElement(react_1["default"].Fragment, null,
        react_1["default"].createElement(Paginator_1["default"], { pageSize: pageSize, totalUsersCount: totalUsersCount, currentPage: currentPage, isFetching: isFetching, onSetCurrentPage: onSetCurrentPage }),
        users.map(function (u) {
            return (react_1["default"].createElement(User_1["default"], { key: u.id, u: u, isArrayFollowing: isArrayFollowing, onSetCurrentPage: onSetCurrentPage, followThunk: followThunk, unfollowThunk: unfollowThunk }));
        })));
};
exports["default"] = Users;
