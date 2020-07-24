import React from 'react';
import classes from './MyPosts.module.css';
import Post from '../Post/Post';
import { PostType, ActionsTypes } from '../../../redux/state';

type PropsType = {
  posts: Array<PostType>;
  newPostText: string;
  dispatch: (action: ActionsTypes) => void;
};

const MyPosts = (props: PropsType) => {
  let postsElements = props.posts.map((p) => <Post key={p.id} message={p.message} likeCount={p.likeCount} />);

  let newPostElement = React.createRef<HTMLTextAreaElement>();

  const addPost = () => {
    props.dispatch({ type: 'ADD-POST' });
  };

  const onAddPostHandler = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    props.dispatch({ type: 'UPDATE-NEW-POST-TEXT', newPostText: e.currentTarget.value });
  };

  return (
    <div className={classes.post_block}>
      <div>
        <h3>My Posts</h3>
        <div>
          <div>
            <textarea ref={newPostElement} value={props.newPostText} onChange={onAddPostHandler}></textarea>
          </div>
          <div>
            <button onClick={addPost}>Add post</button>
          </div>
        </div>
        <div className={classes.posts}>{postsElements}</div>
      </div>
    </div>
  );
};

export default MyPosts;
