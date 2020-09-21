import React from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";

const mapStateToPropsForDirect = (state: any) => {
  return {
    isAuth: state.auth.isAuth,
  };
};

export const withAuthRedirect = (Component: any) => {
  debugger;

  const RedirectComponent = (props: any) => {
    if (!props.isAuth) return <Redirect to="/login" />;
    return <Component {...props} />;
  };

  const ConnectedAuthRedicrectComponent = connect(mapStateToPropsForDirect)(RedirectComponent);

  return ConnectedAuthRedicrectComponent;
};
