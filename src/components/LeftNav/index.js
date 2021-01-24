import React from 'react';
import { NavLink } from 'react-router-dom';
import './style.scss';

const LeftNav = () => (
  <aside className="left-nav">
    <ul>
      <li className="left-nav__item ">
        <NavLink
          to="/current"
          activeClassName="active"
          className="left-nav-item__link"
        >
          Current temperature
        </NavLink>
      </li>
      <li className="left-nav__item">
        <NavLink
          to="/statistics"
          activeClassName="active"
          className="left-nav-item__link"
        >
          Statistics
        </NavLink>
      </li>
    </ul>
  </aside>
);

export default LeftNav;
