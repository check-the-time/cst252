/*
 * Author: Sebastian Tamiano & Marta Gubanova
 * Created: 19 September
 * License: Public Domain
 */

// define variables
myTransport = ["car", "bike", "bus", "walk"];

myMainRide = {
    make: "Toyota",
    model : "AE86",
    color : "White",
    year : 1986,
    age : function () {
        return 2020 - age;
    }
}

// output
document.writeln("Kinds of transportion I use: ", myTransport, "</br>");
document.writeln("My Main Ride: <pre>",
    JSON.stringify(myMainRide, null, '\t'), "</pre>");
