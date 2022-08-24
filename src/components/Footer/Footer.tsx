import React from 'react';
import styles from './Footer.module.scss';

const Footer = (): JSX.Element => (
  <footer className={styles.footer}>
    <div className={styles.container}>
      <p className={styles.copyright}>
        {new Date().getFullYear()}
        {' '}
        Seattle Commander
      </p>
    </div>
  </footer>
);

export default Footer;
