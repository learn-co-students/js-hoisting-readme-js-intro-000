function callMe() {
var callMe = function callMe() {

  console.log("I just met you...");
  console.log("and this is crazy..");
  console.log("but here's my number..");
  console.log("so call me");
  return lyric;
  var lyric = "maybe";
  return lyric;
  //put var lyric above return lyric
}
callMe();

// function crazy() {
//   // fix the code in here:
//   thisIsCrazy();
//
//   var thisIsCrazy = function (){
//     console.log("hey!!!")
//   }
// }

function crazy() {
var crazy = function() {
  // fix the code in here:
  thisIsCrazy();

  var thisIsCrazy = function (){
  var thisIsCrazy = function() {
    console.log("hey!!!")
  }
  thisIsCrazy();
}
crazy()

function sayMyName() {
  // fix the code in here:
  var name = "Cricky";

  sayMy();
// function sayMyName() {
//   // fix the code in here:
//   var name = "Cricky";
//
//   function sayMy() {
//     name = "Kristin"; // took out var before name here
//     console.log(name);
//   }
//   sayMy();
// }
// sayMyName()()

var sayMyName = function() {
  // fix the code in here:
  var name;
  name = "Cricky";

  function sayMy() {
    name = "Kristin"; // took out var before name here
    console.log(name);
    var name = "Kristin";
  }
  sayMy();
}
sayMyName()()
