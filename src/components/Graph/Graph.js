import React from 'react';
import { LineChart } from '@carbon/charts-react';
import { PropTypes } from 'prop-types';
import { tempGraphOptions } from './graphOptions';

const Graph = ({ data, options }) => (
  <LineChart data={data} options={options} />
);

Graph.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      temp: PropTypes.string,
      humidity: PropTypes.string,
      timestamp: PropTypes.string,
    }),
  ),
  options: PropTypes.shape({}),
};

Graph.defaultProps = {
  data: [],
  options: tempGraphOptions,
};

export default Graph;
