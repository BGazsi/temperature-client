import React from 'react';
import './style.scss';
import * as PropTypes from 'prop-types';

const Card = ({ children, cardInARow }) => (
  <div className={`card card--${cardInARow}`}>{children}</div>
);

Card.propTypes = {
  children: PropTypes.node,
  cardInARow: PropTypes.oneOf([1, 2, 3, 4, 6, 12]),
};

Card.defaultProps = {
  children: '',
  cardInARow: 4,
};

export default Card;
