import classes from '../common/FormsControls/FormsControls.module.css';
import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { reduxForm } from 'redux-form';
import { loginThunkAC } from '../../redux/auth-reducer';
import { required } from '../../utils/validators/validators';
import { createField, Input } from '../common/FormsControls/FormsControls';

const LoginForm: React.FC<any> = ({ handleSubmit, error }) => {
  return (
    <form action="" onSubmit={handleSubmit}>
      {createField('Email', 'email', [required], Input)}
      {createField('Password', 'password', [required], Input, { type: 'password' })}
      {createField('', 'rememberMe', '', Input, { type: 'checkbox' }, 'rememberMe')}
      {error && <div className={classes.formSummaryError}>{error}</div>}
      <div>
        <button>Login</button>
      </div>
    </form>
  );
};

const LoginReduxForm = reduxForm({
  form: 'login',
})(LoginForm);

const Login: React.FC<any> = (props) => {
  const onSubmit = (formData: any) => {
    props.login(formData.email, formData.password, formData.rememberMe);
  };

  if (props.isAuth) {
    return <Redirect to="/profile" />;
  }

  return (
    <div>
      <h1>LOGIN</h1>
      <LoginReduxForm onSubmit={onSubmit} />
    </div>
  );
};

const mapStateToProps = (state: any) => ({
  isAuth: state.auth.isAuth,
});

export default connect(mapStateToProps, {
  login: loginThunkAC,
})(Login);
