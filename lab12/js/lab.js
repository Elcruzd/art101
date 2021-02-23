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

function houseClass(str) {
  len = str.length;
  mod = len % 4;
  housesArray = [
        "A Gryffindor values 'bravery, daring, nerve, and chivalry.' Those sorted in this house are not always what you may think of as 'brave' (they can be afraid), but they almost always will choose to do the right thing, despite consequences. They are the popular house and all the Potterheads want to be Gryffindor, even if they don't necessarily belong."
      ,

        "A Hufflepuff values 'hard work, dedication, patience, loyalty, and fair play.' They are generally kind-hearted, diligent, and reliable. But they are also the unpopular house and many Potterheads treat being sorted into Hufflepuff like being worse than getting kissed by a dementor."
      ,

        "A Ravenclaw values 'intelligence, knowledge, and wit.' The nerds of Hogwarts, but in the best way. They don't need a wand to disarm you. Their words will cut you to the bone. They are highly intelligent, resourceful, creative, and clever. They're pretty cool and most Potterheads don't mind being sorted into Ravenclaw"
      ,

        "A Slytherin values 'ambition, cunning, and resourcefulness.' They are sly and clever in every way. They don't need to be brash to get what they want. They are considered the bullies of Hogwarts and the general all around evil-doers. But there are tons of great Slytherin alumni. We just hear a whole lot about the bad ones"
];
  if (mod == 0) {
    return housesArray[0]
  } else if (mod == 1) {
      return housesArray[2]
  } else if (mod == 2) {
    return housesArray[3]
  } else if (mod == 3) {
    return housesArray[1]
  }
};

// Create an event listener attached to #button that
// -gets the value of #input and assigns it to a variable name
// -runs sortingHat(name) and stores the result in a variable house
// -appends a new styled paragraph to #output that says "The Sorting Hat has sorted you into " + house
$("#button").click(function() {
  var name = $("#input").val();
  var house = sortingHat(name);
  var houseDes = houseClass(name)
  $("#output").append("<h1>");
  $("#output").append("<h2>");
  $("#output h1").text("The Sorting Hat has sorted you into: " + house)
  $("#output h2").text(houseDes)
  $("#button").hide();
})

$("#output").prepend("<img id='theImg' src='img/Gryffindor.jpg'>")
$("#output").prepend("<img id='theImg' src='img/Raven.jpg'>")
$("#output").prepend("<img id='theImg' src='img/Sly.jpg'>")
$("#output").prepend("<img id='theImg' src='img/Huff.jpg'>")

$("#p1").hide();
$("#tryAgain").hide();
$("#button").click(function() {
  $("#tryAgain").show();
  $("#p1").show();
})

// Try another input/reload the page
$("#tryAgain").click(function() {
  window.location.reload();
})
