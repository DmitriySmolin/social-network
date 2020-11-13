"use strict";
exports.__esModule = true;
var react_1 = require("react");
var ProfileInfo_module_css_1 = require("./ProfileInfo.module.css");
var Preloader_1 = require("../../common/Preloader/Preloader");
var ProfileStatusWithHooks_1 = require("./ProfileStatusWithHooks");
var ProfileInfo = function (_a) {
    var profile = _a.profile, status = _a.status, updateStatusThunk = _a.updateStatusThunk;
    if (!profile)
        return react_1["default"].createElement(Preloader_1["default"], null);
    return (react_1["default"].createElement(react_1["default"].Fragment, null,
        react_1["default"].createElement("div", { className: ProfileInfo_module_css_1["default"].description_block },
            react_1["default"].createElement("img", { src: profile.photos.large, alt: "" }),
            react_1["default"].createElement(ProfileStatusWithHooks_1["default"], { status: status, updateStatusThunk: updateStatusThunk }))));
};
exports["default"] = ProfileInfo;
