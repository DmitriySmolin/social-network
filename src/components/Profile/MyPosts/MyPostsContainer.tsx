import MyPosts from "./MyPosts";
import { connect } from "react-redux";
import { RootStateType } from "../../../redux/redux-store";
import { addPostAC, updateNewPostTextAC, ProfileActionsTypes } from "../../../redux/profile-reducer";
import { Dispatch } from "react";
import { compose } from "redux";

const mapStateToProps = (state: RootStateType) => {
  return {
    posts: state.profilePage.posts,
    newPostText: state.profilePage.newPostText,
  };
};

const mapDispatchToProps = (dispatch: Dispatch<ProfileActionsTypes>) => {
  return {
    updateNewPosText: (text: string) => {
      let action = updateNewPostTextAC(text);
      dispatch(action);
    },
    addPost: () => {
      dispatch(addPostAC());
    },
  };
};

export default compose(connect(mapStateToProps, mapDispatchToProps))(MyPosts);

// let MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);

// export default MyPostsContainer;
