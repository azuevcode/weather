import React from 'react';
import { Nav, NavLink } from './styles';

const routes = [
  { to: '/today', label: 'Today' },
  { to: '/week', label: 'Week' },
];

const Navbar = () => {
  const links = routes.map(({ to, label }) => {
    return (
      <NavLink exact to={to} key={to}>
        {label}
      </NavLink>
    );
  });

  return <Nav>{ links }</Nav>;
};

export default Navbar;
