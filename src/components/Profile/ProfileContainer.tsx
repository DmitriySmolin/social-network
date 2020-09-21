import React from "react";
import Profile from "./Profile";

import { RootStateType, ProfileType } from "../../redux/redux-store";
import { connect } from "react-redux";
import { getProfileThunkAC, setUserProfileAC } from "../../redux/profile-reducer";
import { withRouter, RouteComponentProps } from "react-router-dom";
import { withAuthRedirect } from "../hoc/withAuthRedirect";

type mapStateToPropsType = {
  profile: ProfileType | null;
  isAuth: boolean;
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
    this.props.getProfileThunk(userId);
  }
  render() {
    return <Profile {...this.props} profile={this.props.profile} />;
  }
}

const mapStateToProps = (state: any) => {
  return { profile: state.profilePage.profile };
};

const AuthRedirectComponent: any = withAuthRedirect(ProfileContainer);

const WithUrlDataContainer = withRouter<any, any>(AuthRedirectComponent);

export default connect(mapStateToProps, {
  setUserProfile: setUserProfileAC,
  getProfileThunk: getProfileThunkAC,
})(WithUrlDataContainer);
