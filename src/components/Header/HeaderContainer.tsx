import React from "react";
import Header from "./Header";
import { connect } from "react-redux";
import { setAuthUserDataAC } from "../../redux/auth-reducer";
import { authStateType } from "../../redux/redux-store";
import { userAPI } from "../api/api";

type HeaderContainerType = {
  isAuth: boolean;
  login: string | null;
  setAuthUserData: (id: number, email: string, login: string) => void;
};

class HeaderContainer extends React.Component<HeaderContainerType> {
  componentDidMount() {
    userAPI.auth().then((data) => {
      const { id, email, login } = data.data;
      if (data.resultCode === 0) this.props.setAuthUserData(id, email, login);
    });
  }
  render() {
    return <Header isAuth={this.props.isAuth} login={this.props.login} />;
  }
}

const mapStateToProps = (state: authStateType) => ({
  isAuth: state.auth.isAuth,
  login: state.auth.login,
});

export default connect(mapStateToProps, {
  setAuthUserData: setAuthUserDataAC,
})(HeaderContainer);
