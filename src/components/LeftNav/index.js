import React from 'react';
import { NavLink } from 'react-router-dom';
import './style.scss';
import { Dropdown } from 'carbon-components-react';

const LeftNav = () => (
  <>
    <aside className="left-nav left-nav--desktop">
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
    <aside className="left-nav left-nav--mobile">
      <Dropdown
        id="mobile-menu"
        items={[
          { id: '/current', text: 'Current temperature' },
          { id: '/statistics', text: 'Statistics' },
        ]}
        itemToString={item => (item ? item.text : '')}
        itemToElement={item => (
          <NavLink
            to={item.id}
            activeClassName="active"
            className="left-nav-item__link"
          >
            {item.text}
          </NavLink>
        )}
        label=""
      />
    </aside>
  </>
);

export default LeftNav;
