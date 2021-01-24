const getYAxisLimits = data => {
  const maxTempValue = Math.max(...data.map(e => e.temp)) + 0.25;
  const minTempValue = Math.min(...data.map(e => e.temp)) - 0.25;
  const maxHumidityValue = Math.max(...data.map(e => e.humidity)) + 0.5;
  const minHumidityValue = Math.min(...data.map(e => e.humidity)) - 0.5;

  return [minTempValue, maxTempValue, minHumidityValue, maxHumidityValue];
};

export default getYAxisLimits;
