import React from 'react';
import PropTypes from 'prop-types';
import Graph from './Graph';
import { averageData } from '../../utils/rarefyData';
import { humidityGraphOptions, tempGraphOptions } from './graphOptions';
import useChartData from '../../hooks/useChartData';
import './style.scss';
import createSubset from '../../utils/createSubset';
import Card from '../Card';

const LastDayGraph = ({ data }) => {
  const rarefiedData = averageData(createSubset(data, 60 * 24), 60);
  const [tempData, humidityData] = useChartData(rarefiedData);
  // eslint-disable-next-line no-console
  console.log({ ...tempGraphOptions, title: 'Last day temperatures' });

  return (
    <div className="last-day-graphs graphs">
      <Card cardInARow={2}>
        <Graph
          data={tempData}
          options={{ ...tempGraphOptions, title: 'Last day temperatures' }}
        />
      </Card>
      <Card cardInARow={2}>
        <Graph
          data={humidityData}
          options={{ ...humidityGraphOptions, title: 'Last day humidity' }}
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
