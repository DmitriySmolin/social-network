"use strict";
exports.__esModule = true;
var react_1 = require("react");
var ProfileStatusWithHooks = function (props) {
    var _a = react_1.useState(false), editMode = _a[0], setEditMode = _a[1];
    var _b = react_1.useState(props.status), status = _b[0], setStatus = _b[1];
    react_1.useEffect(function () {
        setStatus(props.status);
    }, [props.status]);
    var activatedMode = function () {
        setEditMode(true);
    };
    var deactivatedMode = function () {
        setEditMode(false);
        props.updateStatusThunk(status);
    };
    var onStatusChange = function (e) {
        setStatus(e.currentTarget.value);
    };
    return (react_1["default"].createElement("div", null, !editMode ? (react_1["default"].createElement("div", null,
        react_1["default"].createElement("span", { onDoubleClick: activatedMode }, props.status))) : (react_1["default"].createElement("div", null,
        react_1["default"].createElement("input", { onChange: onStatusChange, autoFocus: true, type: "text", value: status, onBlur: deactivatedMode })))));
};
exports["default"] = ProfileStatusWithHooks;
