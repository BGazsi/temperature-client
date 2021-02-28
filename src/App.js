import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { HashRouter as Router, Switch, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import { initialFetch, incrementalFetch } from './store/actions/loadActions';

import './App.scss';
import LeftNav from './components/LeftNav';
import CurrentTemp from './pages/CurrentTemp';
import Statistics from './pages/Statistics';
import Landing from './pages/Landing';

const App = ({ fetchInit, fetchIncrement }) => {
  const [isInited, setIsInited] = useState(false);

  useEffect(() => {
    if (!isInited) {
      fetch('https://bence-temperature-api.herokuapp.com/api/getTemps')
        .then(res => res.json())
        .then(res => {
          setIsInited(true);
          fetchInit(res.temperatureData);
        })
        // eslint-disable-next-line no-console
        .catch(err => {
          setIsInited(true);
          fetchInit({
            data: null,
            error: err,
          });
        });
    }
  }, [isInited]);

  const [listening, setListening] = useState(false);
  useEffect(() => {
    if (!listening) {
      const events = new EventSource(
        'https://bence-temperature-api.herokuapp.com/api/events',
      );
      events.onmessage = event => {
        let parsedData;
        try {
          parsedData = JSON.parse(event.data);
          fetchIncrement(parsedData);
        } catch (ex) {
          // eslint-disable-next-line no-console
          console.warn(ex);
        }
      };

      setListening(true);
    }
  }, [listening]);

  return (
    <Router>
      <LeftNav />
      <div className="app">
        <Switch>
          <Route path="/statistics">
            <Statistics />
          </Route>
          <Route path="/current">
            <CurrentTemp isLoading={false} />
          </Route>
          <Route path="/">
            <Landing />
          </Route>
        </Switch>
      </div>
    </Router>
  );
};

const mapDispatchToProps = dispatch => ({
  fetchInit: data => dispatch(initialFetch(data)),
  fetchIncrement: data => dispatch(incrementalFetch(data)),
});

App.propTypes = {
  fetchInit: PropTypes.func.isRequired,
  fetchIncrement: PropTypes.func.isRequired,
};

export default connect(null, mapDispatchToProps)(App);
