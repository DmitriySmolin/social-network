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
var Profile_1 = require("./Profile");
var react_redux_1 = require("react-redux");
var profile_reducer_1 = require("../../redux/profile-reducer");
var react_router_dom_1 = require("react-router-dom");
var withAuthRedirect_1 = require("../hoc/withAuthRedirect");
var redux_1 = require("redux");
var ProfileContainer = /** @class */ (function (_super) {
    __extends(ProfileContainer, _super);
    function ProfileContainer() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ProfileContainer.prototype.componentDidMount = function () {
        var userId = +this.props.match.params.userId;
        if (!userId) {
            userId = this.props.authorizedUserId;
            if (!userId) {
                this.props.history.push('/login');
            }
        }
        this.props.getProfileThunk(userId);
        this.props.getStatusThunk(userId);
    };
    ProfileContainer.prototype.render = function () {
        return (react_1["default"].createElement(Profile_1["default"], __assign({}, this.props, { profile: this.props.profile, status: this.props.status, updateStatusThunk: this.props.updateStatusThunk })));
    };
    return ProfileContainer;
}(react_1["default"].Component));
var mapStateToProps = function (state) {
    return {
        profile: state.profilePage.profile,
        status: state.profilePage.status,
        authorizedUserId: state.auth.userId,
        isAuth: state.auth.isAuth
    };
};
exports["default"] = redux_1.compose(withAuthRedirect_1.withAuthRedirect, react_router_dom_1.withRouter, react_redux_1.connect(mapStateToProps, {
    setUserProfile: profile_reducer_1.setUserProfileAC,
    getProfileThunk: profile_reducer_1.getProfileThunkAC,
    getStatusThunk: profile_reducer_1.getStatusThunkAC,
    updateStatusThunk: profile_reducer_1.updateStatusThunkAC
}))(ProfileContainer);
