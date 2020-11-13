import React from 'react';
import classes from './ProfileInfo.module.css';
import Prealoder from '../../common/Preloader/Preloader';
import { ProfileType } from '../../../redux/redux-store';
import ProfileStatusWithHooks from './ProfileStatusWithHooks';

type ProfileInfoPropsType = {
  profile: ProfileType | null;
  status: string;
  updateStatusThunk: (status: string) => void;
};

const ProfileInfo: React.FC<ProfileInfoPropsType> = ({ profile, status, updateStatusThunk }) => {
  if (!profile) return <Prealoder />;
  return (
    <>
      <div className={classes.description_block}>
        <img src={profile.photos.large} alt="" />
        <ProfileStatusWithHooks status={status} updateStatusThunk={updateStatusThunk} />
      </div>
    </>
  );
};
export default ProfileInfo;
