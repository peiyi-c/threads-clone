export const addHours = (h) => {
  const one = 60 * 60 * 1000;
  return Date.now() + one * h;
};
