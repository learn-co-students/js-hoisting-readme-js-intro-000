function callMe() {
  console.log("I just met you...");
  console.log("and this is crazy..");
  console.log("but here's my number..");
  console.log("so call me");
  var lyric = "maybe";
  return lyric;
}


var crazy = function() {
  var thisIsCrazy = function() {
    console.log("hey!!!")
  }
  thisIsCrazy();
}
crazy()

var sayMyName = function() {
  var name;
  name = "Cricky";

  function sayMy() {
    name = "Kristin";
    console.log(name);
  }
  sayMy();
}
sayMyName()()
