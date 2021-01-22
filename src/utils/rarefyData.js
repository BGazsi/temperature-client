const rarefyData = (data, datapointFrequencyInMinute = 24 * 60) => {
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

export default rarefyData;
