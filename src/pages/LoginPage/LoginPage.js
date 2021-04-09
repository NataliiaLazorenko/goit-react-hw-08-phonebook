import React from 'react';
import AuthForm from '../../components/AuthForm';
import routes from '../../routes';

const LoginPage = () => (
  <AuthForm
    shouldRenderName={false}
    text="Log in"
    redirectLinkText="Don't have an account? Sign up"
    redirectPath={routes.register}
  />
);

export default LoginPage;
