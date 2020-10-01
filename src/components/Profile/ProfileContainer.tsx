import React from "react";
import Profile from "./Profile";

import { RootStateType, ProfileType } from "../../redux/redux-store";
import { connect } from "react-redux";
import {
  getProfileThunkAC,
  getStatusThunkAC,
  setUserProfileAC,
  updateStatusThunkAC,
} from "../../redux/profile-reducer";
import { withRouter, RouteComponentProps } from "react-router-dom";
import { withAuthRedirect } from "../hoc/withAuthRedirect";
import { compose } from "redux";

type mapStateToPropsType = {
  profile: ProfileType | null;
  isAuth: boolean;
  status: string;
};

type mapDispatchToPropsType = {
  setUserProfile: (profile: ProfileType) => void;
  getProfileThunk: (userId: number) => void;
  getStatusThunk: (userId: number) => void;
  updateStatusThunk: (status: string) => void;
};

class ProfileContainer extends React.Component<
  mapStateToPropsType & mapDispatchToPropsType & RouteComponentProps<{ userId: string }>
> {
  componentDidMount() {
    let userId = +this.props.match.params.userId;
    if (!userId) userId = 2;
    this.props.getProfileThunk(userId);
    this.props.getStatusThunk(userId);
  }
  render() {
    return (
      <Profile
        {...this.props}
        profile={this.props.profile}
        status={this.props.status}
        updateStatusThunk={this.props.updateStatusThunk}
      />
    );
  }
}

const mapStateToProps = (state: RootStateType) => {
  return { profile: state.profilePage.profile, status: state.profilePage.status };
};

export default compose(
  withAuthRedirect,
  withRouter,
  connect(mapStateToProps, {
    setUserProfile: setUserProfileAC,
    getProfileThunk: getProfileThunkAC,
    getStatusThunk: getStatusThunkAC,
    updateStatusThunk: updateStatusThunkAC,
  })
)(ProfileContainer);
