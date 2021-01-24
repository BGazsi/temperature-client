import React from 'react';
import PropTypes from 'prop-types';
import Graph from './Graph';
import createSubset from '../../utils/createSubset';
import { humidityGraphOptions, tempGraphOptions } from './graphOptions';
import useChartData from '../../hooks/useChartData';
import './style.scss';
import Card from '../Card';
import getYAxisLimits from '../../utils/getYAxisLimits';

const Last30MinGraphs = ({ data }) => {
  const dataForLastHour = createSubset(data, 30);
  const [tempData, humidityData] = useChartData(dataForLastHour);
  const [
    minTempValue,
    maxTempValue,
    minHumidityValue,
    maxHumidityValue,
  ] = getYAxisLimits(dataForLastHour);
  const mergedTempOptions = JSON.parse(JSON.stringify(tempGraphOptions));
  mergedTempOptions.axes.left.domain = [+minTempValue, +maxTempValue];
  const mergedHumidityOptions = JSON.parse(
    JSON.stringify(humidityGraphOptions),
  );
  mergedHumidityOptions.axes.left.domain = [
    +minHumidityValue,
    +maxHumidityValue,
  ];

  return (
    <div className="last-hour-graphs graphs">
      <Card cardInARow={2}>
        <Graph
          data={tempData}
          options={{ ...mergedTempOptions, title: 'Last 30 min temperatures' }}
        />
      </Card>
      <Card cardInARow={2}>
        <Graph
          data={humidityData}
          options={{ ...mergedHumidityOptions, title: 'Last 30 min humidity' }}
        />
      </Card>
    </div>
  );
};

Last30MinGraphs.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      temp: PropTypes.string,
      humidity: PropTypes.string,
      timestamp: PropTypes.string,
    }),
  ).isRequired,
};

export default Last30MinGraphs;
