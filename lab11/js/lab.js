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
clicked = true;
$('#challenge button').click(function(){
  $('#challenge').toggleClass('special');
})

$('#problems button').click(function(){
  $('#problems').toggleClass('special');
})

$('#results button').click(function(){
  $('#results').toggleClass('special');
})

var buttonColor = "<button>Change button color</button>";
challengeSec.append(buttonColor);
problemSec.append(buttonColor);
resultSec.append(buttonColor);
$("button").click(function(){
  $('')
});
