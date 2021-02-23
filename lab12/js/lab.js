/*
* Author: Zhendong Jiang & Danielle Kraljevski
* Created: 2/22/2021
* License: Public Domain
*/

// Create a function sortingHat()

// uses modulus (% operator) to get the remainder with 4: mod = length % 4;
// mod will now be a value between 0 and 3
// create a conditional that will return Gryffindor, Ravenclaw, Slytherin, and Hufflepuff depending on whether the value of mod is 0, 1, 2, or 3
// that takes a string as an argument: function sortingHat(str)
// counts the letters in str and assigns it to a variable length
// house = None;
// uses modulus (% operator) to get the remainder with 4: mod = length % 4;
// mod will now be a value between 0 and 3
// create a conditional that will return Gryffindor, Ravenclaw, Slytherin, and Hufflepuff depending on whether the value of mod is 0, 1, 2, or 3
function sortingHat(str) {
  len = str.length;
  mod = len % 4;
  if (mod == 0) {
    return "Gryffindor"
  } else if (mod == 1) {
    return "Ravenclaw"
  } else if (mod == 2) {
    return "Slytherin"
  } else if (mod == 3) {
    return "Hufflepuff"
  }
};

// Create an event listener attached to #button that
// -gets the value of #input and assigns it to a variable name
// -runs sortingHat(name) and stores the result in a variable house
// -appends a new styled paragraph to #output that says "The Sorting Hat has sorted you into " + house
$("#button").click(function() {
  var name = $("#input").val();
  var house = sortingHat(name);
  $("#output").append("<h1>");
  $("#output h1").text("The Sorting Hat has sorted you into: " + house)
})
