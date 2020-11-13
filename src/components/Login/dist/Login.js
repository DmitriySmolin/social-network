"use strict";
exports.__esModule = true;
var FormsControls_module_css_1 = require("../common/FormsControls/FormsControls.module.css");
var react_1 = require("react");
var react_redux_1 = require("react-redux");
var react_router_dom_1 = require("react-router-dom");
var redux_form_1 = require("redux-form");
var auth_reducer_1 = require("../../redux/auth-reducer");
var validators_1 = require("../../utils/validators/validators");
var FormsControls_1 = require("../common/FormsControls/FormsControls");
var LoginForm = function (_a) {
    var handleSubmit = _a.handleSubmit, error = _a.error;
    return (react_1["default"].createElement("form", { action: "", onSubmit: handleSubmit },
        FormsControls_1.createField('Email', 'email', [validators_1.required], FormsControls_1.Input),
        FormsControls_1.createField('Password', 'password', [validators_1.required], FormsControls_1.Input, { type: 'password' }),
        FormsControls_1.createField('', 'rememberMe', '', FormsControls_1.Input, { type: 'checkbox' }, 'rememberMe'),
        error && react_1["default"].createElement("div", { className: FormsControls_module_css_1["default"].formSummaryError }, error),
        react_1["default"].createElement("div", null,
            react_1["default"].createElement("button", null, "Login"))));
};
var LoginReduxForm = redux_form_1.reduxForm({
    form: 'login'
})(LoginForm);
var Login = function (props) {
    var onSubmit = function (formData) {
        props.login(formData.email, formData.password, formData.rememberMe);
    };
    if (props.isAuth) {
        return react_1["default"].createElement(react_router_dom_1.Redirect, { to: "/profile" });
    }
    return (react_1["default"].createElement("div", null,
        react_1["default"].createElement("h1", null, "LOGIN"),
        react_1["default"].createElement(LoginReduxForm, { onSubmit: onSubmit })));
};
var mapStateToProps = function (state) { return ({
    isAuth: state.auth.isAuth
}); };
exports["default"] = react_redux_1.connect(mapStateToProps, {
    login: auth_reducer_1.loginThunkAC
})(Login);
