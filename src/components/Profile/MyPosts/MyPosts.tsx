import React from "react";
import classes from "./MyPosts.module.css";
import Post from "../Post/Post";
import { PostType } from "../../../redux/redux-store";
import { Field, reduxForm } from "redux-form";

type MyPostsPropsType = {
  posts: Array<PostType>;
  addPost: (values: string) => void;
};

const MyPosts: React.FC<MyPostsPropsType> = (props) => {
  let postsElements = props.posts.map((p) => <Post key={p.id} message={p.message} likeCount={p.likeCount} />);

  const onAddPost = (value: any) => {
    props.addPost(value.newPostText);
  };

  return (
    <div className={classes.post_block}>
      <div>
        <h3>My Posts</h3>
        <AddNewPostFormRedux onSubmit={onAddPost} />
        <div className={classes.posts}>{postsElements}</div>
      </div>
    </div>
  );
};

const AddNewPostForm: React.FC<any> = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <div>
        <Field component="textarea" name="newPostText" placeholder="Enter your post" />
      </div>
      <div>
        <button>Add post</button>
      </div>
    </form>
  );
};

const AddNewPostFormRedux = reduxForm({
  form: "ProfileAddNewPostForm",
})(AddNewPostForm);

export default MyPosts;
