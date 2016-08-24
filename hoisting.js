function callMe() {
  var lyric = "maybe";
  console.log("I just met you...");
  console.log("and this is crazy..");
  console.log("but here's my number..");
  console.log("so call me");
  return lyric;
}


function crazy() {
  return thisIsCrazy();
  function thisIsCrazy(){
    console.log("hey!!!")
  }
}

function sayMyName() {
  var name = "Cricky";
  name = "Kristin";
  return sayMy();
  function sayMy() {
    console.log(name);
  }
}
