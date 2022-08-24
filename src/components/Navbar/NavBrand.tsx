import React from 'react';
import styles from './NavBrand.module.scss';

const NavBrand = ({ link = '#' }): JSX.Element => (
  <a className={styles.brandLink} href={link}>
    <img
      className={styles.brand}
      src="./assets/images/logo.svg"
      alt="logo"
    />
  </a>
);

export default NavBrand;
