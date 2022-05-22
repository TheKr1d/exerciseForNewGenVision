const getNormalisedNumber = (item) => {
  const min = item[0] === null ? 0 : item[0];
  const max = item[1] === null ? Infinity : item[1];
  return [min, max];
};

const filtred = (arrCurses, options) => {
  const [minOptions, maxOptions] = getNormalisedNumber(options);
  const result = [];
  arrCurses.forEach((item) => {
    const [minCurses, maxCurses] = getNormalisedNumber(item.prices);
    if (maxOptions >= minCurses && minOptions <= maxCurses) {
      result.push(item);
    }
  });
  return result;
};
export default filtred;
