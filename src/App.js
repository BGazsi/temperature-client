import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import useRequest from './hooks/useRequest';

import './App.scss';
import LeftNav from './components/LeftNav';
import CurrentTemp from './pages/CurrentTemp';
import Statistics from './pages/Statistics';

const App = () => {
  const { data, loading, error } = useRequest(
    'http://localhost:3000/api/getTemps',
  );
  return (
    <Router>
      <LeftNav />
      <div className="app">
        <Switch>
          <Route path="/statistics">
            <Statistics data={data} />
          </Route>
          <Route path="/">
            <CurrentTemp data={data} error={error} isLoading={loading} />
          </Route>
        </Switch>
      </div>
    </Router>
  );
};

export default App;
