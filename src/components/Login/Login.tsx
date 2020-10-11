import React from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import { Field, reduxForm } from "redux-form";
import { loginThunkAC } from "../../redux/auth-reducer";
import { required } from "../../utils/validators/validators";
import { Input } from "../common/FormsControls/FormsControls";

const LoginForm: React.FC<any> = (props) => {
  return (
    <form action="" onSubmit={props.handleSubmit}>
      <div>
        <Field type="text" placeholder="Email" name="email" validate={[required]} component={Input} />
      </div>
      <div>
        <Field type="password" placeholder="Password" name="password" validate={[required]} component={Input} />
      </div>
      <div>
        <Field type="checkbox" name="rememberMe" validate={[required]} component={Input} />
        remember me
      </div>
      <div>
        <button>Login</button>
      </div>
    </form>
  );
};

const LoginReduxForm = reduxForm({
  form: "contact",
})(LoginForm);

const Login: React.FC<any> = (props) => {
  const onSubmit = (formData: any) => {
    props.login(formData.email,formData.password,formData.rememberMe);
  };

  if(props.isAuth){
    return <Redirect to="/profile"/>
  }

  return (
    <div>
      <h1>LOGIN</h1>
      <LoginReduxForm onSubmit={onSubmit} />
    </div>
  );
};

const mapStateToProps = (state:any)=> ({
  isAuth: state.auth.isAuth
})

export default connect(mapStateToProps,{
  login:loginThunkAC,

})(Login);
