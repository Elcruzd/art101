/*
* Author: Zhendong Jiang
* Created: 2/2/2021
* License: Public Domain
*/

// sortName is a function that takes user input and sorts the letters
// of their name
function sortName(userName) {
  return userName.toLowerCase().split("").sort().join("");
}

// a button that let you try again new input
function tryAgain() {
  window.location.reload();
}


// Output
var userName = window.prompt("Which name do you want me to fix?");
var sortedName = sortName(userName);
document.writeln("Fixed! Here's your name: ", sortedName, "</br>");
