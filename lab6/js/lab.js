/*
 * Author: Sebastian Tamiano & Marta Gubanova
 * Created: 19 September
 * License: Public Domain
 */


 // Define an array and an object
 var myTransport = ["Car", "Walking", "Bike", "Bus"];

 var myMainRide = {
   make: "Toyota",
   model: "AE86",
   year: 1986,
   color: "White",
   age: function() {
     return 2020 - year
   }
 };

 // Output
 document.writeln("This is how I get around: " + myTransport + "<br>");
 document.writeln("My main ride is a car: <pre>",
     JSON.stringify(myMainRide, null, '\t'), "</pre>");
