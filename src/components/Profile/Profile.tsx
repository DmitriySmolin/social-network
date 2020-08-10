import React from "react";
import classes from "./Profile.module.css";
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import { Store } from "redux";

// type ProfilePropsType = {
//   store: Store;
// };

const Profile = () => {
  return (
    <div className={classes.content}>
      <ProfileInfo />
      <MyPostsContainer />
    </div>
  );
};

export default Profile;
