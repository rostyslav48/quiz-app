export const convertToPercents = (current: number, all: number) => {
  return Math.round((100 / all) * current);
};
