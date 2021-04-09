import React from 'react';
import AuthForm from '../../components/AuthForm';
import routes from '../../routes';

const RegisterPage = ({ onSignup }) => (
  <AuthForm
    shouldRenderName={true}
    text="Sign up"
    redirectLinkText="Already have an account? Log in"
    redirectPath={routes.login}
    handleAuthenticate={onSignup}
  />
);

export default RegisterPage;
