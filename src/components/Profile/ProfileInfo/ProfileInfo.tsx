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

const ProfileInfo: React.FC<ProfileInfoPropsType> = (props) => {
  if (!props.profile) return <Prealoder />;
  return (
    <>
      {/* <div>
        <img
          src="https://yandex.ru/images/_crpd/C13BG1s17/cb0c41NqHiX/NV-yVO8oetDLw2HMOE4FFh9AFg9BRr8Q_mIMLQOzvaaEonaAe3vZSNc4DQgOEV-h2my-mCCA2SVdJo7OHO0ohSTadNP5efuVCwdw3vqPkgFNVMGaV8Vt0_swXmyB8m-"
          alt=""
        />
      </div> */}
      <div className={classes.description_block}>
        <img src={props.profile.photos.large} alt="" />
        <ProfileStatusWithHooks status={props.status} updateStatusThunk={props.updateStatusThunk} />
      </div>
    </>
  );
};
export default ProfileInfo;
