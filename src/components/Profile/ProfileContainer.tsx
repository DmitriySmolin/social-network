import React from "react";
import Profile from "./Profile";

import { RootStateType, ProfileType } from "../../redux/redux-store";
import { connect } from "react-redux";
import { setUserProfileAC } from "../../redux/profile-reducer";
import axios from "axios";

type ProfileContainerType = {
  profile: ProfileType | null;
  setUserProfile: (profile: ProfileType) => void;
};

class ProfileContainer extends React.Component<ProfileContainerType> {
  componentDidMount() {
    axios.get(`https://social-network.samuraijs.com/api/1.0/profile/2`).then((res) => {
      this.props.setUserProfile(res.data);
    });
  }
  render() {
    return <Profile {...this.props} profile={this.props.profile} />;
  }
}

const mapStateToProps = (state: RootStateType) => {
  return { profile: state.profilePage.profile };
};

export default connect(mapStateToProps, {
  setUserProfile: setUserProfileAC,
})(ProfileContainer);
