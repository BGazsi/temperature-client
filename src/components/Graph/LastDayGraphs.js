import React from 'react';
import PropTypes from 'prop-types';
import Graph from './Graph';
import { averageData } from '../../utils/rarefyData';
import { humidityGraphOptions, tempGraphOptions } from './graphOptions';
import useChartData from '../../hooks/useChartData';
import './style.scss';
import createSubset from '../../utils/createSubset';
import Card from '../Card';
import getYAxisLimits from '../../utils/getYAxisLimits';

const LastDayGraph = ({ data }) => {
  const rarefiedData = averageData(createSubset(data, 60 * 24), 60);
  const [tempData, humidityData] = useChartData(rarefiedData);
  const [
    minTempValue,
    maxTempValue,
    minHumidityValue,
    maxHumidityValue,
  ] = getYAxisLimits(rarefiedData);

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
    <div className="last-day-graphs graphs">
      <Card cardInARow={2}>
        <Graph
          data={tempData}
          options={{ ...mergedTempOptions, title: 'Last day temperatures' }}
        />
      </Card>
      <Card cardInARow={2}>
        <Graph
          data={humidityData}
          options={{ ...mergedHumidityOptions, title: 'Last day humidity' }}
        />
      </Card>
    </div>
  );
};

LastDayGraph.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      temp: PropTypes.string,
      humidity: PropTypes.string,
      timestamp: PropTypes.string,
    }),
  ).isRequired,
};

export default LastDayGraph;
