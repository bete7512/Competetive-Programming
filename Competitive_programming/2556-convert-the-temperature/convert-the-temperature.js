/**
 * @param {number} celsius
 * @return {number[]}
 */
var convertTemperature = function(celsius) {

    kelvin = celsius + 273.15
    fahrenheit = celsius * 1.80 + 32.00

    answer = [kelvin,fahrenheit]  
    return answer  
};