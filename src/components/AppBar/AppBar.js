import React from 'react';
import Container from '../Container';
import Logo from '../Logo';
import Navigation from '../Navigation';
import UserMenu from '../UserMenu';
import AuthNav from '../AuthNav';
import styles from './AppBar.module.scss';

const AppBar = ({ isAuthenticated }) => (
  <header className={styles.header}>
    <Container classes={styles.headerContainer}>
      <Logo />
      <Navigation />
      {isAuthenticated ? <UserMenu /> : <AuthNav />}
    </Container>
  </header>
);

export default AppBar;
