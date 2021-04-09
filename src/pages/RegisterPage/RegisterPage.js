import React from 'react';
import { connect } from 'react-redux';
import AuthForm from '../../components/AuthForm';
import routes from '../../routes';
import operations from '../../redux/auth/auth-operations';

const RegisterPage = ({ onSignup }) => (
  <AuthForm
    shouldRenderName={true}
    text="Sign up"
    redirectLinkText="Already have an account? Log in"
    redirectPath={routes.login}
    handleAuthenticate={onSignup}
  />
);

const mapDispatchToProps = dispatch => ({
  onSignup: user => dispatch(operations.signup(user)),
});

export default connect(null, mapDispatchToProps)(RegisterPage);
