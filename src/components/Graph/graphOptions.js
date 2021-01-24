const baseGraphOptions = {
  title: 'History',
  axes: {
    bottom: {
      title: 'Time',
      mapsTo: 'date',
      scaleType: 'time',
    },
    left: {
      mapsTo: 'value',
      scaleType: 'linear',
      includeZero: false,
    },
  },
  curve: 'curveNatural',
  height: '20rem',
  legend: {
    enabled: false,
  },
};

const tempGraphOptions = {
  ...JSON.parse(JSON.stringify(baseGraphOptions)),
  getFillColor: () => '#005d5d',
  getStrokeColor: () => '#003939',
};
tempGraphOptions.axes.left.domain = [20, 30];

const humidityGraphOptions = {
  ...JSON.parse(JSON.stringify(baseGraphOptions)),
  getFillColor: () => '#1192e8',
  getStrokeColor: () => '#0f7dc7',
};
humidityGraphOptions.axes.left.domain = [20, 40];

export { baseGraphOptions, tempGraphOptions, humidityGraphOptions };
