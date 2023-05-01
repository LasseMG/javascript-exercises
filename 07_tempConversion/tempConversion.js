const convertToCelsius = function(inputFahrenheit) {
  let outputCelsius = (inputFahrenheit - 32) * (5/9);
  let resultC = Math.round(outputCelsius*10)/10;
  return resultC;
  //Math.round(result)
};

const convertToFahrenheit = function(inputCelsius) {
  let outputFahrenheit = (inputCelsius * 9/5) + 32;
  let resultF = Math.round(outputFahrenheit*10)/10;
  return resultF; 
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
