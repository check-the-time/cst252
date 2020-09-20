/*
 * Author: Sebastian Tamiano & Marta Gubanova
 * Created: 19 September
 * License: Public Domain
 */

// define variables
myTransport = ["car", "bike", "bus", "walking"];
myMainRide = {
    make : "Toyota",
    model : "AE86",
    color : "White",
    year : 1986,
    currentYear : 2020


    // Output
    document.writeln("This is how I get around: " + myTransport + "<br>");
    document.writeln("My main ride is a car: <pre>",
        JSON.stringify(myMainRide, null, '\t'), "</pre>");
