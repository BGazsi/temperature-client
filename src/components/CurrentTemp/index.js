import React from 'react';
import { Grid, Loading, Row } from 'carbon-components-react';
import PropTypes from 'prop-types';
import Card from '../Card';
import './style.scss';

const CurrentTemp = ({ data, error, isLoading }) => {
  if (isLoading || (!data && !error)) {
    return <Loading active withOverlay />;
  }

  if (error) {
    return `error: ${error}`;
  }

  const current = data[0];

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
  isLoading: PropTypes.bool,
};

CurrentTemp.defaultProps = {
  data: null,
  error: null,
  isLoading: false,
};

export default CurrentTemp;
