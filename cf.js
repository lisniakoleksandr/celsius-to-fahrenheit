//Basic Algorithm Scripting: Convert Celsius to Fahrenheit
//The algorithm to convert from Celsius to Fahrenheit is the temperature in Celsius times 9/5, plus 32.

//You are given a variable celsius representing a temperature in Celsius. Use the variable fahrenheit already
// defined and assign it the Fahrenheit temperature equivalent to the given Celsius temperature.
 //Use the algorithm mentioned above to help convert the Celsius temperature to Fahrenheit.
//F=C'*1.8+32
'use strict'

var celsius=+prompt ('Enter the temperature in celsius');
typeof celsius;
var Fahrenheit=(celsius*1.8+32);
console.log(Fahrenheit); 
alert('Fahrenheit');