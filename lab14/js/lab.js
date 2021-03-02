/*
* Author: Zhendong Jiang & Danielle Kraljevski
* Created: 2/24/2021
* License: Public Domain
*/

$("#button").click(function fizzBuzz() {
// Create a "FizzBuzz" function similar to how we did in class.
// function fizzBuzz() {
  // Loop through numbers 1 to 200, listing them as you go
  // If the number is a multiple of 3, if should print "Fizz!"
  // If the number is a multiple of 5, it should print "Buzz!"
  // If the number is a multiple of 7, it should print "Boom!"
  // If the number is a multiple of more than one 3, 5 or 7, it should combine Fizz, Buzz, and Boom. For example, if the number is a multiple of 3 AND 5, it should print "FizzBuzz!" and so on.
  // Make it so the output of your program appears in your output div.
  for (var num=1; num<=200; num++) {
    debugger;
    var str = "";
    if (num % 105 == 0) {
      str += "Fizz" + "Buzz" + "Boom";
      $("#output").append("<p>" + num + "-" + str + "</p>");
    }
    else if (num % 15 == 0) {
      str += "Fizz" + "Buzz";
      $("#output").append("<p>" + num + "-" + str + "</p>");
    }
    else if (num % 21 == 0) {
      str += "Fizz" + "Boom";
      $("#output").append("<p>" + num + "-" + str + "</p>");
    }
    else if (num % 35 == 0) {
      str += "Buzz" + "Boom";
      $("#output").append("<p>" + num + "-" + str + "</p>");
    }
    else if (num % 3 == 0) {
      str += "Fizz";
      $("#output").append("<p>" + num + "-" + str + "</p>");
    }
    else if (num % 5 == 0){
      str += "Buzz";
      $("#output").append("<p>" + num + "-" + str + "</p>");
    }
    else if (num % 7 == 0){
      str += "Boom";
      $("#output").append("<p>" + num + "-" + str + "</p>");
    }
    else {
      $("#output").append("<p>" + num + "</p>");
    }
  };
// }
$("#button").hide();
})

$("#tryAgain").hide();
$("#button").click(function() {
  $("#tryAgain").show();
  $("#p1").show();
})

$("#tryAgain").click(function() {
  window.location.reload();
})
