"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
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
var react_1 = require("react");
var Header_1 = require("./Header");
var react_redux_1 = require("react-redux");
var auth_reducer_1 = require("../../redux/auth-reducer");
var redux_1 = require("redux");
var HeaderContainer = /** @class */ (function (_super) {
    __extends(HeaderContainer, _super);
    function HeaderContainer() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    HeaderContainer.prototype.render = function () {
        return react_1["default"].createElement(Header_1["default"], __assign({}, this.props, { isAuth: this.props.isAuth, login: this.props.login }));
    };
    return HeaderContainer;
}(react_1["default"].Component));
var mapStateToProps = function (state) { return ({
    isAuth: state.auth.isAuth,
    login: state.auth.login
}); };
exports["default"] = redux_1.compose(react_redux_1.connect(mapStateToProps, {
    logout: auth_reducer_1.logoutThunkAC
}))(HeaderContainer);
// export default connect(mapStateToProps, {
//   setAuthUserData: setAuthUserDataAC,
//   authThunk: authThunkAC,
// })(HeaderContainer);
