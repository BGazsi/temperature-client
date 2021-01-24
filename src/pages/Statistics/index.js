import React from 'react';
import PropTypes from 'prop-types';
import '@carbon/charts/styles.css';
import LastDayGraphs from '../../components/Graph/LastDayGraphs';
import LastHourGraphs from '../../components/Graph/LastHourGraphs';

const Statistics = ({ data }) => {
  if (!data || !data.length) {
    return <div>todo: chart placeholder</div>;
  }

  return (
    <main>
      <LastDayGraphs data={data} />
      <LastHourGraphs data={data} />
    </main>
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
