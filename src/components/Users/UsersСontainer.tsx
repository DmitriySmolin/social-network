import React from "react";
import { connect } from "react-redux";
import {
  setCurrentPageAC,
  toggleIsFollowingAC,
  getUsersThunkAC,
  followThunkAC,
  unfollowThunkAC,
  followSuccesAC,
} from "../../redux/users-reducer";
import { UserType, RootStateType } from "../../redux/redux-store";
import Users from "./Users";
import { withAuthRedirect } from "../hoc/withAuthRedirect";
import { compose } from "redux";

type mapStateToPropsType = {
  users: Array<UserType>;
  totalUsersCount: number;
  pageSize: number;
  currentPage: number;
  isFetching: boolean;
  isArrayFollowing: Array<number>;
};

type mapDispatchToPropsType = {
  follow: (userId: number) => void;
  unfollow: (userId: number) => void;
  setCurrentPage: (currentPage: number) => void;
  getUsersThunk: (currentPage: number, pageSize: number) => void;
  followThunk: (userId: number) => void;
  unfollowThunk: (userId: number) => void;
};

class UsersContainer extends React.Component<mapStateToPropsType & mapDispatchToPropsType> {
  componentDidMount() {
    this.props.getUsersThunk(this.props.currentPage, this.props.pageSize);
  }

  onSetCurrentPage = (pageNumber: number) => {
    this.props.getUsersThunk(pageNumber, this.props.pageSize);
  };

  render() {
    return (
      <Users
        users={this.props.users}
        pageSize={this.props.pageSize}
        totalUsersCount={this.props.totalUsersCount}
        currentPage={this.props.currentPage}
        isFetching={this.props.isFetching}
        followSuccess={this.props.follow}
        unfollowSuccess={this.props.unfollow}
        onSetCurrentPage={this.onSetCurrentPage}
        isArrayFollowing={this.props.isArrayFollowing}
        followThunk={this.props.followThunk}
        unfollowThunk={this.props.unfollowThunk}
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

export default compose(
  withAuthRedirect,
  connect(mapStateToProps, {
    follow: followSuccesAC,
    unfollow: followSuccesAC,
    setCurrentPage: setCurrentPageAC,
    toggleIsFollowing: toggleIsFollowingAC,
    getUsersThunk: getUsersThunkAC,
    followThunk: followThunkAC,
    unfollowThunk: unfollowThunkAC,
  })
)(UsersContainer);

// const AuthRedirectComponent: any = withAuthRedirect(UsersContainer);

// export default connect(mapStateToProps, {
//   follow: followSuccesAC,
//   unfollow: followSuccesAC,
//   setCurrentPage: setCurrentPageAC,
//   toggleIsFollowing: toggleIsFollowingAC,
//   getUsersThunk: getUsersThunkAC,
//   followThunk: followThunkAC,
//   unfollowThunk: unfollowThunkAC,
// })(AuthRedirectComponent);
