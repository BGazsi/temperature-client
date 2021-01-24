const avg = arr => arr?.reduce((acc, val) => acc + val, 0) / arr?.length || 0;

export const rarefyData = (data, datapointFrequencyInMinute = 24 * 60) => {
  if (!data || !(data instanceof Array)) {
    return data;
  }
  const rarefiedData = [];
  for (
    let i = 0;
    i < Math.ceil(data.length / datapointFrequencyInMinute);
    // eslint-disable-next-line no-plusplus
    i++
  ) {
    const currentElem = data[i * datapointFrequencyInMinute];
    if (currentElem) {
      rarefiedData.push(currentElem);
    }
  }

  return rarefiedData;
};

export const averageData = (data, datapointFrequencyInMinute = 24 * 60) => {
  if (!data || !(data instanceof Array)) {
    return data;
  }
  const rarefiedData = [];
  for (
    let i = 0;
    i < Math.ceil(data.length / datapointFrequencyInMinute);
    // eslint-disable-next-line no-plusplus
    i++
  ) {
    const elementsToGetAverageFrom = data.slice(
      i * datapointFrequencyInMinute,
      i * datapointFrequencyInMinute + datapointFrequencyInMinute,
    );
    const currentElem = {
      temp: avg(elementsToGetAverageFrom.map(e => +e.temp)).toFixed(1),
      humidity: avg(elementsToGetAverageFrom.map(e => +e.humidity)).toFixed(1),
      timestamp: avg(elementsToGetAverageFrom.map(e => +e.timestamp)).toFixed(),
    };
    if (currentElem) {
      rarefiedData.push(currentElem);
    }
  }

  return rarefiedData;
};
