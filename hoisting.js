function callMe() {
  console.log("I just met you...");
  console.log("and this is crazy..");
  console.log("but here's my number..");
  console.log("so call me");
  console.log("maybe");
  var lyric = "maybe";
  return lyric;
}

function crazy() {
  console.log("hey!!!")
  var thisIsCrazy = function (){
    thisIsCrazy();
  }
}

function sayMyName() {
  sayMy();
  function sayMy() {
    console.log (name);
    var name = "Kristin";
    console.log (name);
  }
}
