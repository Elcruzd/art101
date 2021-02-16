/*
* Author: Zhendong Jiang & Danielle Kraljevski
* Created: 2/14/2021
* License: Public Domain
*/

//Function Define
//split string, sort it, rejoin it
function sortName(userName) {
  return userName.toLowerCase().split("").sort().join("");
}

var button = document.getElementById('my-button');
    button.addEventListener("click", function() {
        // get the element and its value (user's name)
        var userName = document.getElementById('user-name').value;
        // modify the name
        var sortedName = sortName(userName);
        // put new value in output
        var outputEl = document.getElementById('output');
        outputEl.innerHTML = sortName(userName);
      });

// Try another input/reload the page
function tryAgain() {
  window.location.reload();
}
