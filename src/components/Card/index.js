import React from 'react';
import './style.scss';
import * as PropTypes from 'prop-types';

const Card = ({ children }) => <div className="card">{children}</div>;

Card.propTypes = {
  children: PropTypes.node,
};

Card.defaultProps = {
  children: '',
};

export default Card;
