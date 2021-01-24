import React from 'react';
import PropTypes from 'prop-types';
import Graph from './Graph';
import createSubset from '../../utils/createSubset';
import { humidityGraphOptions, tempGraphOptions } from './graphOptions';
import useChartData from '../../hooks/useChartData';
import './style.scss';
import Card from '../Card';

const LastHourGraph = ({ data }) => {
  const dataForLastHour = createSubset(data, 60);
  const [tempData, humidityData] = useChartData(dataForLastHour);

  return (
    <div className="last-hour-graphs graphs">
      <Card cardInARow={2}>
        <Graph
          data={tempData}
          options={{ ...tempGraphOptions, title: 'Last hour temperatures' }}
        />
      </Card>
      <Card cardInARow={2}>
        <Graph
          data={humidityData}
          options={{ ...humidityGraphOptions, title: 'Last hour humidity' }}
        />
      </Card>
    </div>
  );
};

LastHourGraph.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      temp: PropTypes.string,
      humidity: PropTypes.string,
      timestamp: PropTypes.string,
    }),
  ).isRequired,
};

export default LastHourGraph;
