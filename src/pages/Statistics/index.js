import React from 'react';
import PropTypes from 'prop-types';
import LastDayGraphs from '../../components/Graph/LastDayGraphs';
import Last30MinGraphs from '../../components/Graph/Last30MinGraphs';

const Statistics = ({ data }) => {
  if (!data || !data.length) {
    return <div>todo: chart placeholder</div>;
  }

  return (
    <main>
      <small className="timestamp timestamp--padded">
        Last measurement at:{' '}
        {`${new Date(+data[0].timestamp).toLocaleDateString()}, ${new Date(
          +data[0].timestamp,
        ).toLocaleTimeString()}`}
      </small>
      <LastDayGraphs data={data} />
      <Last30MinGraphs data={data} />
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
