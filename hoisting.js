/* Here is the preliminary lesson (ie all the broken code)

function callMe() {
  console.log("I just met you...");
  console.log("and this is crazy..");
  console.log("but here's my number..");
  console.log("so call me");
  return lyric;
  var lyric = "maybe";
}


function crazy() {
  // fix the code in here:
  thisIsCrazy();

  var thisIsCrazy = function (){
    console.log("hey!!!")
  }
}

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

//And now for Stacey's fixing all the things!
function callMe() {
  var lyric = "maybe"; // var lyric declaration was hoisted, but not the assignment. I moved the assignment up to top of function.
  console.log("I just met you...");
  console.log("and this is crazy..");
  console.log("but here's my number..");
  console.log("so call me");
  return lyric;
}


function crazy() {
  var thisIsCrazy = function (){ // var thisIsCrazy declaration was hoised, but not the assignment. I moved the assignment up and added a semi-colon after the function runs but inside the curly bracket.
    console.log("hey!!!");
  }
    thisIsCrazy();
}



function sayMyName() {
  function sayMy() { // I moved assigning the function to top.
    var name = "Kristin"; // I moved assigning the var name above logging
    console.log(name);
  }
  var name = "Cricky";

  sayMy();


}
