import React from 'react';
import styles from './NavItem.module.scss';

const NavItem = ({ name = 'NavItem', link = '#' }): JSX.Element => (
  <li className={styles.NavItem}>
    <a className="btn btn--default" href={link}>{name}</a>
  </li>
);

export default NavItem;
