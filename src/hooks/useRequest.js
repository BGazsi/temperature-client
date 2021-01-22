import { useState, useEffect } from 'react';

const useRequest = initUrl => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    let ignore = false;
    const fetchTemps = () => {
      setLoading(true);
      fetch(initUrl)
        .then(res => res.json())
        .then(res => {
          if (!ignore) {
            setData(res.temperatureData);
            setLoading(false);
          }
        })
        .catch(err => {
          setError(err);
          setLoading(false);
        });
    };
    fetchTemps();
    return () => {
      ignore = true;
    };
  }, [initUrl]);

  return { data, loading, error };
};

export default useRequest;
