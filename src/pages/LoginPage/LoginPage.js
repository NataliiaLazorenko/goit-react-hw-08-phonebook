import React from 'react';
import Container from '../../components/Container';
import AuthForm from '../../components/AuthForm';
import routes from '../../routes';

const LoginPage = ({ onLogin }) => (
  <section className="section">
    <Container>
      <AuthForm
        shouldRenderName={false}
        text="Log in"
        redirectLinkText="Don't have an account? Sign up"
        redirectPath={routes.register}
        handleAuthenticate={onLogin}
      />
    </Container>
  </section>
);

export default LoginPage;
