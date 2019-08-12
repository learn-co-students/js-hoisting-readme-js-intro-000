lyric = "maybe";
function callMe() {
  console.log("I just met you...");
  console.log("and this is crazy..");
  console.log("but here's my number..");
  console.log("so call me");
  return lyric;
}

function crazy() {
  console.log("hey!!!");
  var thisIsCrazy = function() {
  thisIsCrazy();
    console.log("hey!!!");
  }
}

var name = "Kristin";
function sayMyName() {
  name = "Cricky";
  console.log(name)
  sayMy();
  function sayMy() {
    name = "Kristin";
    console.log(name);
 }
}
