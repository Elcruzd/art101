/*
* Author: Zhendong Jiang
* Created: 1/28/2021
* License: Public Domain
*/

// Define Variables
myTransport = ["sedan car", " bus", " bicycle"];

myMainRide = {
    make: "Honda",
    model: "Civic",
    color: "Black",
    year: 2019,
    age: function() {
      return 2021 - this.year;
    }
}

// output
document.writeln("Kinds of transportion I use: ", myTransport, "</br>");
document.writeln("</br>My Main Ride: <pre>", JSON.stringify(myMainRide, null, '\t'), "</pre>");
 document.writeln("The age of the car is: " + myMainRide.age(), " years");
