import React from "react";
import classes from "./Profile.module.css";
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import { ProfileType } from "../../redux/redux-store";

type ProfilePropsType = {
  profile: ProfileType | null;
};

const Profile: React.FC<ProfilePropsType> = (props) => {
  return (
    <div className={classes.content}>
      <ProfileInfo profile={props.profile} />
      <MyPostsContainer />
    </div>
  );
};

export default Profile;
