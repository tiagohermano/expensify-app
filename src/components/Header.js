import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => (
  <div>
    <h1>Portfolio</h1>
    <NavLink to="/" activeClassName="is-active" exact>Home</NavLink>
    <NavLink to="/portfolio" activeClassName="is-active">My Work</NavLink>
    <NavLink to="/contact" activeClassName="is-active">Contact</NavLink>
  </div>
);

export default Header;
