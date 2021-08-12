export default (hex) => {
  const rgbArr = toRgb(hex);
  console.log(rgbArr, !rgbArr.some((num) => num < 235));

  return !rgbArr.some((num) => num < 235);
};

const toRgb = (hex) => {
  var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);

  return result
    ? [
        parseInt(result[1], 16),
        parseInt(result[2], 16),
        parseInt(result[3], 16),
      ]
    : null;
};
