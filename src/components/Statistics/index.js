import React from 'react';
import PropTypes from 'prop-types';
import { AreaChart } from '@carbon/charts-react';
import '@carbon/charts/styles.css';
import createSubset from '../../utils/createSubset';
import rarefyData from '../../utils/rarefyData';

const Statistics = ({ data }) => {
  const chartOptions = {
    title: 'History',
    axes: {
      bottom: {
        title: 'Time',
        mapsTo: 'date',
        scaleType: 'time',
      },
      left: {
        mapsTo: 'value',
        scaleType: 'linear',
      },
    },
    curve: 'curveNatural',
    height: '400px',
  };
  if (!data || !data.length) {
    return <div>chart placeholder</div>;
  }
  const rarefiedData = rarefyData(data, 60);
  const tempData = rarefiedData.map(point => ({
    value: +point.temp,
    group: 'Temperature',
    date: new Date(+point.timestamp).toISOString(),
  }));
  const humidityData = rarefiedData.map(point => ({
    value: +point.humidity,
    group: 'Humidity',
    date: new Date(+point.timestamp).toISOString(),
  }));
  const chartData = [...humidityData, ...tempData];

  const dataForLastHour = createSubset(data, 60);
  console.log(dataForLastHour, data);
  const tempDataForLastHour = dataForLastHour.map(point => ({
    value: +point.temp,
    group: 'Temperature',
    date: new Date(+point.timestamp).toISOString(),
  }));
  const humidityDataForLastHour = dataForLastHour.map(point => ({
    value: +point.humidity,
    group: 'Humidity',
    date: new Date(+point.timestamp).toISOString(),
  }));

  const chartDataForLastHour = [
    ...humidityDataForLastHour,
    ...tempDataForLastHour,
  ];
  return (
    <div>
      <AreaChart data={chartData} options={chartOptions} />
      <AreaChart
        data={chartDataForLastHour}
        options={{ ...chartOptions, title: 'Last hour' }}
      />
    </div>
  );
};

Statistics.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      temp: PropTypes.string,
      humidity: PropTypes.string,
      timestamp: PropTypes.string,
    }),
  ),
};

Statistics.defaultProps = {
  data: null,
};

export default Statistics;
