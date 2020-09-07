import React from "react";
import Profile from "./Profile";

import { RootStateType, ProfileType } from "../../redux/redux-store";
import { connect } from "react-redux";
import { setUserProfileAC } from "../../redux/profile-reducer";
import { withRouter } from "react-router-dom";
import { userAPI } from "../api/api";

type ProfileContainerType = {
  profile: ProfileType | null;
  setUserProfile: (profile: ProfileType) => void;
};

class ProfileContainer extends React.Component<any> {
  componentDidMount() {
    let userId = this.props.match.params.userId;
    if (!userId) userId = 2;
    userAPI.getProfile(userId).then((data) => {
      this.props.setUserProfile(data);
    });
  }
  render() {
    return <Profile {...this.props} profile={this.props.profile} />;
  }
}

const mapStateToProps = (state: RootStateType) => {
  return { profile: state.profilePage.profile };
};

const WithUrlDataContainer = withRouter(ProfileContainer);

export default connect(mapStateToProps, {
  setUserProfile: setUserProfileAC,
})(WithUrlDataContainer);
