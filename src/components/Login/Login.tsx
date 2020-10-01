import React from "react";
import { Field, reduxForm } from "redux-form";

const LoginForm: React.FC<any> = (props) => {
  return (
    <form action="" onSubmit={props.handleSubmit}>
      <div>
        <Field type="text" placeholder={"Login"} name={"login"} component={"input"} />
      </div>
      <div>
        <Field type="number" placeholder={"Password"} name={"password"} component={"input"} />
      </div>
      <div>
        <Field type="checkbox" name={"rememberMe"} component={"input"} />
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
