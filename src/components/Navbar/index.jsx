import React from 'react';
import { NavLink } from 'react-router-dom';

const routes = [
  { to: '/today', label: 'Today' },
  { to: '/week', label: 'Week' },
];

const Navbar = () => {
  const links = routes.map(({ to, label }) => {
    return <NavLink exact to={to} key={to}>{label}</NavLink>;
  });

  return <nav>{ links }</nav>;
};

export default Navbar;
