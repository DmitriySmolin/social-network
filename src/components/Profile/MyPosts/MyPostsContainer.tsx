import React from "react";
import { addPostActionCreator, updateNewPostTextCreator } from "../../../redux/profile-reducer";
import MyPosts from "./MyPosts";
import StoreContext from "../../../StoreContext";
import { Store } from "redux";

// type MyPostsContainerPropsType = {
//   store: Store;
// };

const MyPostsContainer = () => {
  return (
    <StoreContext.Consumer>
      {(store: Store) => {
        let state = store.getState();

        const onAddPost = () => {
          store.dispatch(addPostActionCreator());
        };

        const onPostChange = (text: string) => {
          let action = updateNewPostTextCreator(text);
          store.dispatch(action);
        };
        return (
          <MyPosts
            updateNewPosText={onPostChange}
            addPost={onAddPost}
            posts={state.profilePage.posts}
            newPostText={state.profilePage.newPostText}
          />
        );
      }}
    </StoreContext.Consumer>
  );
};

export default MyPostsContainer;
