import React from 'react';
import { Link } from 'react-router-dom';
import './style.scss';

const LeftNav = () => (
  <aside className="left-nav">
    <ul>
      <li className="left-nav__item">
        <Link to="/">Current temperature</Link>
      </li>
      <li className="left-nav__item">
        <Link to="/statistics">Statistics</Link>
      </li>
    </ul>
  </aside>
);

export default LeftNav;
