var lyric = "maybe";
function callMe() {
  console.log("I just met you...");
  console.log("and this is crazy..");
  console.log("but here's my number..");
  console.log("so call me");
  return lyric;
}

function crazy() {
  console.log("hey!!!");
  return thisIsCrazy();

function thisIsCrazy(){
    console.log("hey!!!")
  }
}
var name = "Kristin";
function sayMyName() {
  console.log(name);
  return sayMy();

  function sayMy() {
    return name;
  }
}
