const useChartData = data => {
  const tempData = data.map(point => ({
    value: +point.temp,
    group: 'Temperature',
    date: new Date(+point.timestamp).toISOString(),
  }));
  const humidityData = data.map(point => ({
    value: +point.humidity,
    group: 'Humidity',
    date: new Date(+point.timestamp).toISOString(),
  }));

  return [tempData, humidityData];
};

export default useChartData;
