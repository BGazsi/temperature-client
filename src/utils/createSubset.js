const findClosestPointToTime = (data, timestamp) => {
  if (!data || data.length === 0) {
    return data;
  }
  if (timestamp > +data[0].timestamp || !timestamp) {
    return [data[0], 0];
  }
  if (timestamp < +data[data.length - 1].timestamp) {
    return [data[data.length - 1], data.length - 1];
  }
  let currentTimestamp = +data[0].timestamp;
  let currentIndex = 0;
  while (currentTimestamp > timestamp) {
    currentIndex += 1;
    currentTimestamp = +data[currentIndex].timestamp;
  }
  return [data[currentIndex], currentIndex];
};

const createSubset = (data, subsetTimeframeInMinute, startTime) => {
  if (!data || data.length === 0) {
    return data;
  }
  const safeStartTime = startTime || +data[0].timestamp;
  // eslint-disable-next-line no-unused-vars
  const [start, startIndex] = findClosestPointToTime(data, startTime);
  // eslint-disable-next-line no-unused-vars
  const [end, endIndex] = findClosestPointToTime(
    data,
    safeStartTime - subsetTimeframeInMinute * 60000,
  );

  return data.slice(startIndex, endIndex + 1);
};

export default createSubset;
