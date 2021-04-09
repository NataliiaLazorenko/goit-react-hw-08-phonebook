import React from 'react';
import { NavLink } from 'react-router-dom';
import routes from '../../routes';
import styles from './Navigation.module.scss';

const Navigation = () => (
  <ul className={styles.navList}>
    <li className={styles.navListItem}>
      <NavLink to={routes.home} className={`link ${styles.listItemLink}`}>
        Home
      </NavLink>
    </li>
    <li>
      <NavLink to={routes.contacts} className={`link ${styles.listItemLink}`}>
        Contacts
      </NavLink>
    </li>
  </ul>
);

export default Navigation;
