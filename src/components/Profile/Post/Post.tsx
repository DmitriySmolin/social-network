import React from 'react';
import classes from './Post.module.css';

type PostPropsType = {
  message: string;
  likeCount: number;
};

const Post = (props: PostPropsType) => {
  return (
    <div className={classes.item}>
      {props.message}
      <img
        src="https://million-wallpapers.ru/wallpapers/5/51/296486574365124/nejtiri-avatar-film.jpg"
        alt=""
      />
      <div>
        <span>like {props.likeCount}</span>
      </div>
    </div>
  );
};

export default Post;
