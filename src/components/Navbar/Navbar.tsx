import React from 'react';
import styles from './Navbar.module.scss';
import NavBrand from './NavBrand';
import NavItem from './NavItem';

const NAVBAR_ITEMS: any[] = [
  // {
  //   id: '01',
  //   name: 'About',
  //   link: '#',
  // },
];

const Navbar = (): JSX.Element => (
  <nav className={styles.container}>
    <NavBrand />
    <ul className={styles.items}>
      {NAVBAR_ITEMS.length !== 0 && NAVBAR_ITEMS.map((item) => (
        <NavItem
          key={item.id}
          name={item.name}
          link={item.link}
        />
      ))}
    </ul>
  </nav>
);

export default Navbar;
