import React from 'react';
import useRequest from './hooks/useRequest';

import './App.scss';
import LeftNav from './components/LeftNav';
import CurrentTemp from './components/CurrentTemp';

const App = () => {
  const { data, loading, error } = useRequest(
    'http://localhost:3000/api/getTemps',
  );
  return (
    <>
      <LeftNav />
      <div className="app">
        <CurrentTemp data={data} error={error} isLoading={loading} />
      </div>
    </>
  );
};

export default App;
