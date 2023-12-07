const densityCalcFunction = (type, firstArg, secondArg) => {
  if (type === 'volume') {
    const weight = +firstArg;
    const density = +secondArg;
    return (weight / density).toFixed(2);
  }
  if (type === 'weight') {
    const volume = +firstArg;
    const density = +secondArg;
    return (volume * density).toFixed(2);
  }
  if (type === 'density') {
    const volume = +firstArg;
    const weight = +secondArg;
    return (weight / volume).toFixed(4);
  }
};

export default densityCalcFunction;
