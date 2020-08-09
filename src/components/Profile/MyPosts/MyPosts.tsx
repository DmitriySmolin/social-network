import React from "react";
import classes from "./MyPosts.module.css";
import Post from "../Post/Post";
import { PostType } from "../../../redux/redux-store";

type MyPostsPropsType = {
  posts: Array<PostType>;
  newPostText: string;
  addPost: () => void;
  updateNewPosText: (text: string) => void;
};

const MyPosts: React.FC<MyPostsPropsType> = (props) => {
  let postsElements = props.posts.map((p) => (
    <Post key={p.id} message={p.message} likeCount={p.likeCount} />
  ));

  let newPostElement = React.createRef<HTMLTextAreaElement>();

  const onAddPost = () => {
    props.addPost();
  };

  const onPostChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    let text = e.currentTarget.value;
    props.updateNewPosText(text);
  };

  return (
    <div className={classes.post_block}>
      <div>
        <h3>My Posts</h3>
        <div>
          <div>
            <textarea
              placeholder="Enter your post"
              ref={newPostElement}
              value={props.newPostText}
              onChange={onPostChange}
            ></textarea>
          </div>
          <div>
            <button onClick={onAddPost}>Add post</button>
          </div>
        </div>
        <div className={classes.posts}>{postsElements}</div>
      </div>
    </div>
  );
};

export default MyPosts;
