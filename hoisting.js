function callMe() {
  var lyric = "maybe";
  console.log("I just met you...");
  console.log("and this is crazy..");
  console.log("but here's my number..");
  console.log("so call me");
  return lyric;
}


/* OG CODE PROBLEM 2
function crazy() {
  // fix the code in here:
  thisIsCrazy();

  var thisIsCrazy = function (){
    console.log("hey!!!")
  }
}
*/

// My solution below PROBLEM 2
function crazy() {

  var thisIsCrazy = function() {
    console.log("hey!!!")
  }
  thisIsCrazy();
}
// My solution above PROBLEM 2

/* OG CODE below PROBLEM 3
function sayMyName() {
  // fix the code in here:
  var name = "Cricky";

  sayMy();

  function sayMy() {
    console.log(name);
    var name = "Kristin";
  }
}
*/

// My solution below PROBLEM 3
function sayMyName() {
  var name = "Cricky";

  sayMy();

  function sayMy() {
    var name = "Kristin";

    console.log(name);
     }
}
