import React from 'react';
import AuthForm from '../../components/AuthForm';
import routes from '../../routes';

const LoginPage = ({ onLogin }) => (
  <AuthForm
    shouldRenderName={false}
    text="Log in"
    redirectLinkText="Don't have an account? Sign up"
    redirectPath={routes.register}
    handleAuthenticate={onLogin}
  />
);

export default LoginPage;
