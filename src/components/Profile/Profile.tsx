import React from "react";
import classes from "./Profile.module.css";
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import { ProfileType } from "../../redux/redux-store";

type ProfilePropsType = {
  profile: ProfileType | null;
  status: string;
  updateStatusThunk: (status: string) => void;
};

const Profile: React.FC<ProfilePropsType> = (props) => {
  return (
    <div className={classes.content}>
      <ProfileInfo profile={props.profile} status={props.status} updateStatusThunk={props.updateStatusThunk} />
      <MyPostsContainer />
    </div>
  );
};

export default Profile;
