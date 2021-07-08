function callMe() {
  console.log("I just met you...");
  console.log("and this is crazy..");
  console.log("but here's my number..");
  console.log("so call me");
  var lyric = "maybe";
  return lyric;

}


function crazy() {
  // fix the code in here:
  var thisIsCrazy = function (){
    console.log("hey!!!")
  }
  thisIsCrazy();
}

function sayMyName() {
  // fix the code in here:
  var name = {wrong: "Cricky", right: "Kristin"}; // not sure if this was how it was intendend to be fixed but it worked! I looked at the car make/model example on https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Functions
  console.log(name.right);

  function sayMy() {
    console.log(name);
  }
}
