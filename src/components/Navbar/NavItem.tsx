import React from 'react';
import './NavItem.scss';

const NavItem = ({ name = 'NavItem', link = '#' }): JSX.Element => (
  <li className="NavItem">
    <a className="btn btn--default" href={link}>{name}</a>
  </li>
);

export default NavItem;
