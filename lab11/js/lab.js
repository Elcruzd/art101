/*
* Author: Zhendong Jiang & Danielle Kraljevski
* Created: 2/16/2021
* License: Public Domain
*/

// Find the section you want to add the button to
var challengeSec = $('#challenge');
var problemSec = $('#problems');
var resultSec = $('#results');
// Create the button
// Give it a text label
var button = "<button>Click Me</button>";
// Add it to the section
challengeSec.append(button);
problemSec.append(button);
resultSec.append(button);

// Add a click event to each button
// Toggle a class special within the <div> of the section
// Go into your css and style each of the classes
// Test each button
$('#challenge button').click(function() {
  $('#challenge').toggleClass('special');
})

$('#problems button').click(function(){
  $('#problems').toggleClass('special');
})

$('#results button').click(function(){
  $('#results').toggleClass('special');
})

// a button that changes another button's color and vice versa
var outputSec = $('#output');
var buttonChange = "<button>Change button color</button>";
outputSec.prepend(buttonChange);
$("#output button").click(function(){
	$("button").toggleClass("red")
});

$("#previous").click(function() {
  window.history.back();
})
