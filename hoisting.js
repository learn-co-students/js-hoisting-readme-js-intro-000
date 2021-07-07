var lyric = "maybe";
function callMe() {
  console.log("I just met you...");
  console.log("and this is crazy..");
  console.log("but here's my number..");
  console.log("so call me");
  return lyric;
}

var thisIsCrazy = function (){
  console.log("hey!!!")
}
function crazy() {
  // fix the code in here:
  thisIsCrazy();
}

crazy();

// Part 3 //
var name = "Kristin";
function sayMyName() {
  console.log(name);

  function sayMy() {
    var name = "Cricky";
  }
  sayMy();

}
