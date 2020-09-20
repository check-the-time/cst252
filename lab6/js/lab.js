/*
 * Author: Sebastian Tamiano & Marta Gubanova
 * Created: 19 September
 * License: Public Domain
 */

// define variables
var myTransport = ["car", "bike", "bus", "walking"];
var myMainRide = {
    make : "Toyota",
    model : "AE86",
    color : "White",
    year : 1986,
    currentYear : 2020
    

// output
document.writeln("Kinds of transportion I use: ", myTransport, "</br>");
document.writeln("My Main Ride: <pre>",
    JSON.stringify(myMainRide, null, '\t'), "</pre>");
