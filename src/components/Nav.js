import React from 'react';
import { NavLink } from 'react-router-dom';

const Nav = () => {
  const activeStyle = { border: '1px solid red' };
  const activeClass = 'active';
  return (
    <ul>
      <li>
        <NavLink activeStyle={activeStyle} exact to="/">
          Home
        </NavLink>
      </li>
      <li>
        <NavLink activeClassName={activeClass} to="/contact">
          Contact
        </NavLink>
      </li>
      <li>
        <NavLink activeClassName={activeClass} to="/404.html">
          NotFound
        </NavLink>
      </li>
    </ul>
  );
};

export default Nav;
