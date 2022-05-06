import React from 'react';
import './Navbar.scss';
import NavBrand from './NavBrand';
import NavItem from './NavItem';

const NAVBAR_ITEMS = [
  {
    id: '01',
    name: 'Events',
  },
  {
    id: '02',
    name: 'About',
  },
];

const Navbar = (): JSX.Element => (
  <nav className="Navbar-container">
    <NavBrand />
    <ul className="Navbar-items">
      {NAVBAR_ITEMS.map((item) => <NavItem key={item.id} name={item.name} />)}
    </ul>
  </nav>
);

export default Navbar;
