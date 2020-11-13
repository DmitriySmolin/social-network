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
exports.__esModule = true;
var react_1 = require("react");
require("./App.css");
var Navbar_1 = require("./components/Navbar/Navbar");
var News_1 = require("./components/News/News");
var Music_1 = require("./components/Music/Music");
var Settings_1 = require("./components/Settings/Settings");
var react_router_dom_1 = require("react-router-dom");
var DialogsContainer_1 = require("./components/Dialogs/DialogsContainer");
var Users_ontainer_1 = require("./components/Users/Users\u0421ontainer");
var ProfileContainer_1 = require("./components/Profile/ProfileContainer");
var HeaderContainer_1 = require("./components/Header/HeaderContainer");
var Login_1 = require("./components/Login/Login");
var react_redux_1 = require("react-redux");
var redux_1 = require("redux");
var app_reducer_1 = require("./redux/app-reducer");
var Preloader_1 = require("./components/common/Preloader/Preloader");
var App = /** @class */ (function (_super) {
    __extends(App, _super);
    function App() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    App.prototype.componentDidMount = function () {
        this.props.initializeApp();
    };
    App.prototype.render = function () {
        if (!this.props.initialized)
            return react_1["default"].createElement(Preloader_1["default"], null);
        return (react_1["default"].createElement("div", { className: "app-wrapper" },
            react_1["default"].createElement(HeaderContainer_1["default"], null),
            react_1["default"].createElement(Navbar_1["default"], null),
            react_1["default"].createElement("div", { className: "app-wrapper-content" },
                react_1["default"].createElement(react_router_dom_1.Route, { path: "/profile/:userId?", render: function () { return react_1["default"].createElement(ProfileContainer_1["default"], null); } }),
                react_1["default"].createElement(react_router_dom_1.Route, { path: "/dialogs", render: function () { return react_1["default"].createElement(DialogsContainer_1["default"], null); } }),
                react_1["default"].createElement(react_router_dom_1.Route, { path: "/users", render: function () { return react_1["default"].createElement(Users_ontainer_1["default"], null); } }),
                react_1["default"].createElement(react_router_dom_1.Route, { path: "/login", render: function () { return react_1["default"].createElement(Login_1["default"], null); } }),
                react_1["default"].createElement(react_router_dom_1.Route, { path: "/news", component: News_1["default"] }),
                react_1["default"].createElement(react_router_dom_1.Route, { path: "/music", component: Music_1["default"] }),
                react_1["default"].createElement(react_router_dom_1.Route, { path: "/settings", component: Settings_1["default"] }))));
    };
    return App;
}(react_1["default"].Component));
var mapStateToProps = function (state) { return ({
    initialized: state.app.initialized
}); };
var AppRouter = react_router_dom_1.withRouter(App);
exports["default"] = redux_1.compose(react_redux_1.connect(mapStateToProps, { initializeApp: app_reducer_1.initializeAppThunkAC }))(AppRouter);
