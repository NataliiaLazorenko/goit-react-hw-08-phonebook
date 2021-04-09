import React from 'react';
import AuthForm from '../../components/AuthForm';
import routes from '../../routes';

const RegisterPage = () => (
  <AuthForm
    shouldRenderName={true}
    text="Sign in"
    redirectLinkText="Already have an account? Log in"
    redirectPath={routes.login}
  />
);

export default RegisterPage;
