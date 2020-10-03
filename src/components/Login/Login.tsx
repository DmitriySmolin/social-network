import React from "react";
import { Field, reduxForm } from "redux-form";
import { required } from "../../utils/validators/validators";
import { Input } from "../common/FormsControls/FormsControls";

const LoginForm: React.FC<any> = (props) => {
  return (
    <form action="" onSubmit={props.handleSubmit}>
      <div>
        <Field type="text" placeholder="Login" name="login" validate={[required]} component={Input} />
      </div>
      <div>
        <Field type="number" placeholder="Password" name="password" validate={[required]} component={Input} />
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
    console.log(formData);
  };
  return (
    <div>
      <h1>LOGIN</h1>
      <LoginReduxForm onSubmit={onSubmit} />
    </div>
  );
};

export default Login;
