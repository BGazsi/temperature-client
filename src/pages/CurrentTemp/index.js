import React from 'react';
import { Grid, Loading, Row } from 'carbon-components-react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Card from '../../components/Card';
import './style.scss';
import {
  incrementalFetch,
  initialFetch,
} from '../../store/actions/loadActions';

const CurrentTemp = ({ data, error }) => {
  if (!error && !data.length) {
    return <Loading active withOverlay />;
  }

  if (error) {
    return `error: ${error.message || error}`;
  }

  const current = data[0] || {};

  return (
    <div className="page-inner">
      <Grid>
        <Row>
          <small className="timestamp">
            Last measurement at:{' '}
            {`${new Date(+current.timestamp).toLocaleDateString()}, ${new Date(
              +current.timestamp,
            ).toLocaleTimeString()}`}
          </small>
        </Row>
        <Row>
          <Card>
            <h2>Current temperature</h2>
            <p className="centered">{current.temp} °C</p>
          </Card>
          <Card>
            <h2>Current humidity</h2>
            <p className="centered">{current.humidity}%</p>
          </Card>
        </Row>
      </Grid>
    </div>
  );
};

CurrentTemp.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      temp: PropTypes.string,
      humidity: PropTypes.string,
      timestamp: PropTypes.string,
    }),
  ),
  error: PropTypes.instanceOf(Object),
};

CurrentTemp.defaultProps = {
  data: null,
  error: null,
};

const mapStateToProps = (state, ownProps) => ({
  ...ownProps,
  data: state.load.data,
  error: state.load.error,
});

const mapDispatchToProps = dispatch => ({
  fetchInit: data => dispatch(initialFetch(data)),
  fetchIncrement: data => dispatch(incrementalFetch(data)),
});

export default connect(mapStateToProps, mapDispatchToProps)(CurrentTemp);
