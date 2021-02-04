/*
* Author: Zhendong Jiang
* Created: 2/2/2021
* License: Public Domain
*/

// sortName is a function that takes user input and sorts the letters
// of their name
function sortName() {
  var userName = window.prompt("Which name do you want me to fix?");
  console.log("userName =", userName);
  // split string to array
  var strArray = userName.split('');
  console.log("strArray =", strArray);
  // sort the array
  var arraySort = strArray.sort();
  console.log("arraySort =", arraySort);
  // join array back to string
  var strSort = arraySort.join('');
  console.log("strSort =", strSort);
  return strSort;
}

// a button that let you try again new input
function tryAgain() {
  window.location.reload();
}

// Output
document.writeln("Fixed! Here's your name: ", sortName(), "</br>");
