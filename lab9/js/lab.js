/*
* Author: Zhendong Jiang & Danielle Kraljevski
* Created: 2/10/2021
* License: Public Domain
*/

// Use getElementById() to find your output <div> and assign it to a variable outputEl
var outputEl = document.getElementById("output");

// Create a new element with document.createElement("p") and assign it to a variable new1El
var new1El = document.createElement("p");

// Change the html attribute of new1El to say something new.
new1El.innerHTML = "This is an example of me changing this element to say something new."

// Create another new element and assign it to a variable new2El
var new2El = document.createElement("div");

// Change the html attribute of new2El to say something else.
new2El.innerHTML = "<p>It is new2El.</p>"

// Append both new elements one at a time using appendChild() to your output <div>
outputEl.appendChild(new1El);
outputEl.appendChild(new2El);

// Change the css attributes of at least two elements of your page
function clickMe() {
  document.getElementById("p1").style.color = "#32a852";
  document.getElementById("p2").style.color = "black";
  document.getElementById("p3").style.color = "#a8a232";
  document.getElementById("h1").style.color = "black";
  document.getElementById("h2").style.color = "#7a7a69";
  document.getElementById("h3").style.color = "#7a7a69";
  document.getElementById("h4").style.color = "#7a7a69";
  document.getElementById("b1").style.backgroundColor = "white";
  document.getElementById("b1"). style.textAlign = "center";
  document.getElementById("b1"). style.fontStyle = "oblique";
}

function changeBack() {
  window.location.reload();
}
