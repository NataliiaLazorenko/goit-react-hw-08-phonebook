import React from 'react';
import Container from '../Container';
import Navigation from '../Navigation';
import UserMenu from '../UserMenu';
import AuthNav from '../AuthNav';
import styles from './AppBar.module.scss';

const AppBar = ({ isAuthenticated }) => (
  <header className={styles.header}>
    <Container>
      <nav className={styles.navigation}>
        <Navigation />
        {isAuthenticated ? <UserMenu /> : <AuthNav />}
      </nav>
    </Container>
  </header>
);

export default AppBar;
