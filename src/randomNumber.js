export default (min, max) => {
  const rational = Math.random() * (max - min) + min;
  return Math.floor(rational);
};
