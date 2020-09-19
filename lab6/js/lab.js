/*
 * Author: Sebastian Tamiano & Marta Gubanova
 * Created: 19 September
 * License: Public Domain
 */

// define variables
var myTransport = ["car", "bike", "bus", "walking"];

var myMainRide = {
    make: "Toyota",
    model : "AE86",
    color : "White",
    year : 1986,
    age : function (2020, "year") {
        return 2020 - "age";
    }
    return : "age"
}

// output
document.writeln("Kinds of transportion I use: ", myTransport, "</br>");
document.writeln("My Main Ride: <pre>",
    JSON.stringify(myMainRide, null, '\t'), "</pre>");
