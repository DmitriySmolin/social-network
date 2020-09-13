import React from "react";
import { connect } from "react-redux";
import {
  followAC,
  unfollowAC,
  setUsersAC,
  setCurrentPageAC,
  setTotalUsersCountAC,
  toggleIsFetchingAC,
  toggleIsFollowingAC,
} from "../../redux/users-reducer";
import { UserType, RootStateType } from "../../redux/redux-store";

import Users from "./Users";
import { userAPI } from "../api/api";

type UsersCotainerPropsType = {
  users: Array<UserType>;
  totalUsersCount: number;
  pageSize: number;
  currentPage: number;
  isFetching: boolean;
  isArrayFollowing: Array<number>;
  follow: (userId: number) => void;
  unfollow: (userId: number) => void;
  setUsers: (users: Array<UserType>) => void;
  setCurrentPage: (currentPage: number) => void;
  setTotalUsersCount: (totalCount: number) => void;
  toggleIsFetching: (isFetching: boolean) => void;
  toggleIsFollowing: (isFollowing: boolean, userId: number) => void;
};

class UsersContainer extends React.Component<UsersCotainerPropsType> {
  componentDidMount() {
    this.props.toggleIsFetching(true);

    userAPI.getUsers(this.props.currentPage, this.props.pageSize).then((data) => {
      this.props.setUsers(data.items);
      if (data.totalCount >= 54) {
        data.totalCount = 54;
        this.props.setTotalUsersCount(data.totalCount);
        this.props.toggleIsFetching(false);
      }
    });
  }

  onSetCurrentPage = (pageNumber: number) => {
    this.props.toggleIsFetching(true);
    this.props.setCurrentPage(pageNumber);
    userAPI.getUsers(pageNumber, this.props.pageSize).then((data) => {
      this.props.setUsers(data.items);
      this.props.toggleIsFetching(false);
    });
  };

  render() {
    return (
      <Users
        users={this.props.users}
        pageSize={this.props.pageSize}
        totalUsersCount={this.props.totalUsersCount}
        currentPage={this.props.currentPage}
        isFetching={this.props.isFetching}
        follow={this.props.follow}
        unfollow={this.props.unfollow}
        onSetCurrentPage={this.onSetCurrentPage}
        toggleIsFollowing={this.props.toggleIsFollowing}
        isArrayFollowing={this.props.isArrayFollowing}
      />
    );
  }
}

const mapStateToProps = (state: RootStateType) => {
  return {
    users: state.usersPage.users,
    pageSize: state.usersPage.pageSize,
    totalUsersCount: state.usersPage.totalUsersCount,
    currentPage: state.usersPage.currentPage,
    isFetching: state.usersPage.isFetching,
    isArrayFollowing: state.usersPage.isArrayFollowing,
  };
};

// const mapDispatchToProps = (dispatch: Dispatch<ActionsTypes>) => {
//   return {
//     follow: (userId: number) => {
//       dispatch(followAC(userId));
//     },
//     unfollow: (userId: number) => {
//       dispatch(unfollowAC(userId));
//     },
//     setUsers: (users: Array<UserType>) => {
//       dispatch(setUsersAC(users));
//     },
//     setCurrentPage: (pageNumber: number) => {
//       dispatch(setCurrentPageAC(pageNumber));
//     },
//     setTotalUsersCount: (totalCount: number) => {
//       dispatch(setTotalUsersCountAC(totalCount));
//     },
//     toggleIsFetching: (isFetching: boolean) => {
//       dispatch(setIsFetchingAC(isFetching));
//     },
//   };
// };

export default connect(mapStateToProps, {
  follow: followAC,
  unfollow: unfollowAC,
  setUsers: setUsersAC,
  setCurrentPage: setCurrentPageAC,
  setTotalUsersCount: setTotalUsersCountAC,
  toggleIsFetching: toggleIsFetchingAC,
  toggleIsFollowing: toggleIsFollowingAC,
})(UsersContainer);
