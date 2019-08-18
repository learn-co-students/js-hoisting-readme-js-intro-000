function callMe() {
  var lyric; // hoisting
  lyric = "maybe";
  
  console.log("I just met you...");
  console.log("and this is crazy..");
  console.log("but here's my number..");
  console.log("so call me");
  
  return lyric;
}


function crazy() {
  // fix the code in here:
  var thisIsCrazy;
   thisIsCrazy = function (){
    console.log("hey!!!")
  }
  thisIsCrazy(); // we can't hoist FUNCTION at the top
}

function sayMyName() {
  // fix the code in here:
  var name = "Cricky";

  function sayMy() { // inner functions auto hoisted to top
    var name;
    name = "Kristin";
    console.log(name);
  }
  
  sayMy();

}
