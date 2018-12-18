//F = C*1.8+32
module.exports = function warmup(temperature = 0) {
  const temp = temperature;
  return temp*1.8+32;
};
