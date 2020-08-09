import React from "react";
import { addPostActionCreator, updateNewPostTextCreator } from "../../../redux/profile-reducer";
import MyPosts from "./MyPosts";

type MyPostsContainerPropsType = {
  store: any;
};

const MyPostsContainer: React.FC<MyPostsContainerPropsType> = (props) => {
  let state = props.store.getState();

  const onAddPost = () => {
    props.store.dispatch(addPostActionCreator());
  };

  const onPostChange = (text: string) => {
    let action = updateNewPostTextCreator(text);
    props.store.dispatch(action);
  };

  return (
    <MyPosts
      updateNewPosText={onPostChange}
      addPost={onAddPost}
      posts={state.profilePage.posts}
      newPostText={state.profilePage.newPostText}
    />
  );
};

export default MyPostsContainer;
