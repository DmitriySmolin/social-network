import React from "react";
import Header from "./Header";
import { connect } from "react-redux";
import { authThunkAC, setAuthUserDataAC } from "../../redux/auth-reducer";
import { AuthStateType } from "../../redux/redux-store";

type mapStateToPropsType = {
  isAuth: boolean;
  login: string | null;
};

type mapDispatchToPropsType = {
  setAuthUserData: (id: number, email: string, login: string) => void;
  authThunk: () => void;
};

class HeaderContainer extends React.Component<mapStateToPropsType & mapDispatchToPropsType> {
  componentDidMount() {
    this.props.authThunk();
  }
  render() {
    return <Header isAuth={this.props.isAuth} login={this.props.login} />;
  }
}

const mapStateToProps = (state: AuthStateType) => ({
  isAuth: state.auth.isAuth,
  login: state.auth.login,
});

export default connect(mapStateToProps, {
  setAuthUserData: setAuthUserDataAC,
  authThunk: authThunkAC,
})(HeaderContainer);
