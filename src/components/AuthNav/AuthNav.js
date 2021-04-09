import React from 'react';
import { NavLink } from 'react-router-dom';
import routes from '../../routes';
import styles from './AuthNav.module.scss';

const AuthNav = () => (
  <ul className={styles.AuthNavList}>
    <li className={styles.listItem}>
      <NavLink to={routes.login} className={`link ${styles.listItemLink}`}>
        Log in
      </NavLink>
    </li>
    <li>
      <NavLink to={routes.register} className={`link ${styles.listItemLink}`}>
        Sign up
      </NavLink>
    </li>
  </ul>
);

export default AuthNav;
