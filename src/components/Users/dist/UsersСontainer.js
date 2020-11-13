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
var react_redux_1 = require("react-redux");
var users_reducer_1 = require("../../redux/users-reducer");
var Users_1 = require("./Users");
var redux_1 = require("redux");
var users_selectors_1 = require("../../redux/users-selectors");
var UsersContainer = /** @class */ (function (_super) {
    __extends(UsersContainer, _super);
    function UsersContainer() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.onSetCurrentPage = function (pageNumber) {
            var pageSize = _this.props.pageSize;
            _this.props.getUsersThunk(pageNumber, pageSize);
        };
        return _this;
    }
    UsersContainer.prototype.componentDidMount = function () {
        var _a = this.props, currentPage = _a.currentPage, pageSize = _a.pageSize;
        this.props.getUsersThunk(currentPage, pageSize);
    };
    UsersContainer.prototype.render = function () {
        return (react_1["default"].createElement(Users_1["default"], { users: this.props.users, pageSize: this.props.pageSize, totalUsersCount: this.props.totalUsersCount, currentPage: this.props.currentPage, isFetching: this.props.isFetching, onSetCurrentPage: this.onSetCurrentPage, isArrayFollowing: this.props.isArrayFollowing, followThunk: this.props.followThunk, unfollowThunk: this.props.unfollowThunk }));
    };
    return UsersContainer;
}(react_1["default"].Component));
// const mapStateToProps = (state: RootStateType) => {
//   return {
//     users: state.usersPage.users,
//     pageSize: state.usersPage.pageSize,
//     totalUsersCount: state.usersPage.totalUsersCount,
//     currentPage: state.usersPage.currentPage,
//     isFetching: state.usersPage.isFetching,
//     isArrayFollowing: state.usersPage.isArrayFollowing,
//   };
// };
var mapStateToProps = function (state) {
    return {
        users: users_selectors_1.getUsers(state),
        // users: getUsers(state),
        pageSize: users_selectors_1.getPageSize(state),
        totalUsersCount: users_selectors_1.getTotalUsersCount(state),
        currentPage: users_selectors_1.getCurrentPage(state),
        isFetching: users_selectors_1.getIsFetching(state),
        isArrayFollowing: users_selectors_1.getIsArrayFollowing(state)
    };
};
exports["default"] = redux_1.compose(react_redux_1.connect(mapStateToProps, {
    follow: users_reducer_1.followSuccesAC,
    unfollow: users_reducer_1.followSuccesAC,
    setCurrentPage: users_reducer_1.setCurrentPageAC,
    toggleIsFollowing: users_reducer_1.toggleIsFollowingAC,
    getUsersThunk: users_reducer_1.getUsersThunkAC,
    followThunk: users_reducer_1.followThunkAC,
    unfollowThunk: users_reducer_1.unfollowThunkAC
}))(UsersContainer);
