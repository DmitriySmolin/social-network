import MyPosts from "./MyPosts";
import { connect } from "react-redux";
import { RootStateType } from "../../../redux/redux-store";
import { addPostAC, ProfileActionsTypes } from "../../../redux/profile-reducer";
import { Dispatch } from "react";
import { compose } from "redux";

const mapStateToProps = (state: RootStateType) => {
  return {
    posts: state.profilePage.posts,
  };
};

const mapDispatchToProps = (dispatch: Dispatch<ProfileActionsTypes>) => {
  return {
    addPost: (value: any) => {
      dispatch(addPostAC(value));
    },
  };
};

export default compose(connect(mapStateToProps, mapDispatchToProps))(MyPosts);
