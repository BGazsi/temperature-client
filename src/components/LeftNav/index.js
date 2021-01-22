import React from 'react';
import './style.scss';

const LeftNav = () => (
  <aside className="left-nav">
    <ul>
      <li className="left-nav__item">
        <a href="/">Current temperature</a>
      </li>
      <li className="left-nav__item">
        <a href="/">Statistics</a>
      </li>
    </ul>
  </aside>
);

export default LeftNav;
