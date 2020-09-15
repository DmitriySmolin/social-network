import React from "react";
import Profile from "./Profile";

import { RootStateType, ProfileType } from "../../redux/redux-store";
import { connect } from "react-redux";
import { getProfileThunkAC, setUserProfileAC } from "../../redux/profile-reducer";
import { withRouter, RouteComponentProps } from "react-router-dom";

type mapStateToPropsType = {
  profile: ProfileType | null;
};

type mapDispatchToPropsType = {
  setUserProfile: (profile: ProfileType) => void;
  getProfileThunk: (userId: number) => void;
};

class ProfileContainer extends React.Component<
  mapStateToPropsType & mapDispatchToPropsType & RouteComponentProps<{ userId: string }>
> {
  componentDidMount() {
    let userId = +this.props.match.params.userId;
    if (!userId) userId = 2;
    // userAPI.getProfile(userId).then((data) => {
    //   this.props.setUserProfile(data);
    // });
    this.props.getProfileThunk(userId);
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
  getProfileThunk: getProfileThunkAC,
})(WithUrlDataContainer);
