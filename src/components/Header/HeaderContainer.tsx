import React from "react";
import Header from "./Header";
import axios from "axios";
import { connect } from "react-redux";
import { setAuthUserDataAC } from "../../redux/auth-reducer";
import { authStateType } from "../../redux/redux-store";

type HeaderContainerType = {
  isAuth: boolean;
  login: string | null;
  setAuthUserData: (id: number, email: string, login: string) => void;
};

class HeaderContainer extends React.Component<HeaderContainerType> {
  componentDidMount() {
    axios
      .get(`https://social-network.samuraijs.com/api/1.0/auth/me`, {
        withCredentials: true,
      })
      .then((res) => {
        const { id, email, login } = res.data.data;
        if (res.data.resultCode === 0) this.props.setAuthUserData(id, email, login);
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
