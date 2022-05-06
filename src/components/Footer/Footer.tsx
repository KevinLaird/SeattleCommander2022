import React from 'react';
import './Footer.scss';

const Footer = (): JSX.Element => (
  <footer className="footer">
    <div className="footer-container">
      <p className="footer-copyright">
        {new Date().getFullYear()}
        {' '}
        Seattle Commander
      </p>
    </div>
  </footer>
);

export default Footer;
