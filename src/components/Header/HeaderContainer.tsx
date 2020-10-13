import React from "react";
import Header from "./Header";
import { connect } from "react-redux";
import {  getAuthUserDataThunkAC, logoutThunkAC, setAuthUserDataAC } from "../../redux/auth-reducer";
import { AuthStateType } from "../../redux/redux-store";
import { compose } from "redux";

type mapStateToPropsType = {
  isAuth: boolean;
  login: string | null;
};

type mapDispatchToPropsType = {
  logout: (isAuth: boolean, login: string | null) => void
};

class HeaderContainer extends React.Component<any> {

  render() {
    return <Header {...this.props} isAuth={this.props.isAuth} login={this.props.login} />;
  }
}

const mapStateToProps = (state: AuthStateType) => ({
  isAuth: state.auth.isAuth,
  login: state.auth.login,
});

export default compose(
  connect(mapStateToProps, {
    logout:logoutThunkAC,
  })
)(HeaderContainer);

// export default connect(mapStateToProps, {
//   setAuthUserData: setAuthUserDataAC,
//   authThunk: authThunkAC,
// })(HeaderContainer);
