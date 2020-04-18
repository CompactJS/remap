export const remap = (value, min, max, targetMin, targetMax) => {
  return targetMin + ((value - min) / (max - min)) * (targetMax - targetMin);
};
