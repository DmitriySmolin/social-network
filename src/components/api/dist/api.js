"use strict";
exports.__esModule = true;
exports.authAPI = exports.profileAPI = exports.userAPI = void 0;
var axios_1 = require("axios");
var instance = axios_1["default"].create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: { 'API-KEY': '00e119a9-4fb8-4595-827b-ec20d2d596cd' }
});
exports.userAPI = {
    getUsers: function (currentPage, pageSize) {
        if (currentPage === void 0) { currentPage = 1; }
        if (pageSize === void 0) { pageSize = 10; }
        return instance.get("users/?page=" + currentPage + "&count=" + pageSize).then(function (res) { return res.data; });
    },
    getProfile: function (userId) {
        return instance.get("profile/" + userId).then(function (res) { return res.data; });
    },
    setUnfollow: function (userId) {
        return instance["delete"]("follow/" + userId).then(function (res) { return res.data; });
    },
    setFollow: function (userId) {
        console.warn('Obsolete method. Please profileAPI object.');
        return exports.profileAPI.getProfile(userId);
    }
};
exports.profileAPI = {
    getProfile: function (userId) {
        return instance.get("profile/" + userId).then(function (res) { return res.data; });
    },
    getStatus: function (userId) {
        return instance.get("profile/status/" + userId).then(function (res) { return res.data; });
    },
    updateStatus: function (status) {
        return instance.put("profile/status", { status: status }).then(function (res) { return res.data; });
    }
};
exports.authAPI = {
    auth: function () {
        return instance.get("auth/me").then(function (res) { return res.data; });
    },
    login: function (email, password, rememberMe) {
        if (rememberMe === void 0) { rememberMe = false; }
        return instance
            .post("auth/login", { email: email, password: password, rememberMe: rememberMe })
            .then(function (res) { return res.data; });
    },
    logout: function () {
        return instance["delete"]("auth/login").then(function (res) { return res.data; });
    }
};
