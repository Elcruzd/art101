/*
* Author: Zhendong Jiang & Danielle Kraljevski
* Created: 2/6/2021
* License: Public Domain
*/

// Create three functions called firstThing, secondThing, and thirdThing that
// take a parameter test
function firstThing(test) {
  console.log(test + "This is the first thing.</br>")
}

function secondThing(test) {
  console.log(test + "This is the second thing.</br>")
}

function thirdThing(test) {
  console.log(test + "This is the third thing.</br>")
}

// first test, call the three functions in order using "TEST 1"
firstThing("TEST 1");
secondThing("TEST 1");
thirdThing("TEST 1");

// second test, use setTimeout() and an anonymous function to call your
// 3 functions with "TEST 2"
setTimeout(function() {
  firstThing("TEST 2");
}, 0);

setTimeout(function() {
  secondThing("TEST 2");
}, 0);

setTimeout(function() {
  thirdThing("TEST 2");
}, 0);

// third test, like test 2 but adjust the times of setTimeout() so our
// "TEST 3" functions print in the following order: 2, 3, 1.
setTimeout(function() {
  firstThing("TEST 3");
}, 3000);

setTimeout(function() {
  secondThing("TEST 3");
}, 1000);

setTimeout(function() {
  thirdThing("TEST 3");
}, 2000);
