import { connect } from "react-redux";
import { followAC, unfollowAC, setUsersAC } from "../../redux/users-reducer";
import Users from "./Users";
import { RootStateType, UserType, ActionsTypes } from "../../redux/redux-store";
import { Dispatch } from "react";

const mapStateToProps = (state: RootStateType) => {
  return { users: state.usersPage.users };
};

const mapDispatchToProps = (dispatch: Dispatch<ActionsTypes>) => {
  return {
    follow: (userId: number) => {
      dispatch(followAC(userId));
    },
    unfollow: (userId: number) => {
      dispatch(unfollowAC(userId));
    },
    setUsers: (users: Array<UserType>) => {
      dispatch(setUsersAC(users));
    },
  };
};

const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users);

export default UsersContainer;
