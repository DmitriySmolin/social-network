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
  setAuthUserData: (id: number, email: string, login: string,isAuth:boolean) => void;
  getAuthUserData: () => void;
  logout: (isAuth: boolean, login: string | null) => void
};

class HeaderContainer extends React.Component<any> {
  componentDidMount() {
    this.props.getAuthUserData();
  }
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
    setAuthUserData: setAuthUserDataAC,
    getAuthUserData: getAuthUserDataThunkAC,
    logout:logoutThunkAC,
  })
)(HeaderContainer);

// export default connect(mapStateToProps, {
//   setAuthUserData: setAuthUserDataAC,
//   authThunk: authThunkAC,
// })(HeaderContainer);
