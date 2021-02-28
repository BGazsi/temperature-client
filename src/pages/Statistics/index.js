import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Loading } from 'carbon-components-react';
import LastDayGraphs from '../../components/Graph/LastDayGraphs';
import Last30MinGraphs from '../../components/Graph/Last30MinGraphs';
import {
  incrementalFetch,
  initialFetch,
} from '../../store/actions/loadActions';

const Statistics = ({ data }) => {
  if (!data || !data.length) {
    return <Loading active withOverlay />;
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

const mapStateToProps = (state, ownProps) => ({
  ...ownProps,
  data: state.load.data,
});

const mapDispatchToProps = dispatch => ({
  fetchInit: data => dispatch(initialFetch(data)),
  fetchIncrement: data => dispatch(incrementalFetch(data)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Statistics);
