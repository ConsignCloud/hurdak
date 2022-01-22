export default (precision, x) =>
  Math.round(x * Math.pow(10, precision)) / Math.pow(10, precision)
