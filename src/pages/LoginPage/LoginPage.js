import React from 'react';
import { connect } from 'react-redux';
import AuthForm from '../../components/AuthForm';
import routes from '../../routes';
import operations from '../../redux/auth/auth-operations';

const LoginPage = ({ onLogin }) => (
  <AuthForm
    shouldRenderName={false}
    text="Log in"
    redirectLinkText="Don't have an account? Sign up"
    redirectPath={routes.register}
    handleAuthenticate={onLogin}
  />
);

const mapDispatchToProps = dispatch => ({
  onLogin: user => dispatch(operations.login(user)),
});

export default connect(null, mapDispatchToProps)(LoginPage);
