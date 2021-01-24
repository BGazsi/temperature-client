import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import useRequest from './hooks/useRequest';

import './App.scss';
import LeftNav from './components/LeftNav';
import CurrentTemp from './pages/CurrentTemp';
import Statistics from './pages/Statistics';
import Landing from './pages/Landing';

const App = () => {
  const { data, loading, error } = useRequest(
    'http://localhost:3000/api/getTemps',
  );
  return (
    <Router basename="/temperature-client">
      <LeftNav />
      <div className="app">
        <Switch>
          <Route path="/statistics">
            <Statistics data={data} />
          </Route>
          <Route path="/current">
            <CurrentTemp data={data} error={error} isLoading={loading} />
          </Route>
          <Route path="/">
            <Landing />
          </Route>
        </Switch>
      </div>
    </Router>
  );
};

export default App;
