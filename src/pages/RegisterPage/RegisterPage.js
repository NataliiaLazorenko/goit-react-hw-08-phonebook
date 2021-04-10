import React from 'react';
import Container from '../../components/Container';
import AuthForm from '../../components/AuthForm';
import routes from '../../routes';

const RegisterPage = ({ onSignup }) => (
  <section className="section">
    <Container>
      <AuthForm
        shouldRenderName={true}
        text="Sign up"
        redirectLinkText="Already have an account? Log in"
        redirectPath={routes.login}
        handleAuthenticate={onSignup}
      />
    </Container>
  </section>
);

export default RegisterPage;
