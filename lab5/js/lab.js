/*
    * Author: Sebastian Tamiano
  * Partner: Marta Gubanova
  * Created: 15 September 2020
  * License: Public Domain
*/
// Define variables
var make = "Toyota";
var model = "AE86";
var color = "White";
var ownIt = false;
var year = 1986;
var currentYear = 2020;

// Calculate age
age = currentYear - year;

// output
document.writeln("Make: " + make + "<br>");
document.writeln("Model: " + model + "<br>");
document.writeln("Color: " + color + "<br>");
document.writeln("Year: " + year + "<br>");
document.writeln("Age: " + age + " years <br>");
document.writeln("It is " + ownIt + " that I own it<br>");
