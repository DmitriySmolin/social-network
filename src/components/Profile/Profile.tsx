import React from 'react';
import classes from './Profile.module.css';
import MyPosts from './MyPosts/MyPosts';
import ProfileInfo from './ProfileInfo/ProfileInfo';
import { ProfilePageType, ActionsTypes } from '../../redux/state';

type PropsType = {
  state: ProfilePageType;
  dispatch: (action: ActionsTypes) => void;
};

const Profile = (props: PropsType) => {
  return (
    <div>
      <ProfileInfo />
      <MyPosts posts={props.state.posts} newPostText={props.state.newPostText} dispatch={props.dispatch} />
    </div>
  );
};

export default Profile;
