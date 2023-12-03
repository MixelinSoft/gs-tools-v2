const densityCalcFunction = (type, firstArg, secondArg) => {
  if (type === 'volume') {
    const weight = +firstArg;
    const density = +secondArg;
    return 'Volume Calculated!';
  }
  if (type === 'weight') {
    const volume = +firstArg;
    const density = +secondArg;
    return 'Weight Calculated!';
  }
  if (type === 'density') {
    const volume = +firstArg;
    const weight = +secondArg;
    return 'Density Calculated!';
  }
};

export default densityCalcFunction;
