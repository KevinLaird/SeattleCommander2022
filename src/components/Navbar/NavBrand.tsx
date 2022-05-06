import React from 'react';
import './NavBrand.scss';

const NavBrand = ({ link = '#' }): JSX.Element => (
  <a className="NavBrand-link" href={link}>
    <img className="NavBrand" src="./assets/images/logo.svg" alt="logo" />
  </a>
);

export default NavBrand;
