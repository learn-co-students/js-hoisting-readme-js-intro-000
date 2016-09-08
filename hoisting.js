function callMe() {
  console.log("I just met you...");
  console.log("and this is crazy..");
  console.log("but here's my number..");
  console.log("so call me");
  //return lyric;
  var lyric = "maybe";
  return lyric;
}
callMe();

//var thisIsCrazy;

function crazy() {
  // fix the code in here:

//thisIsCrazy();

  var  thisIsCrazy = function (){
    console.log("hey!!!")
  }

  console.log(thisIsCrazy());
}

crazy();

//thisIsCrazy();

function sayMyName() {
  // fix the code in here:
  var name = "Cricky";

  sayMy();

  function sayMy() {
    var name="Kristin" // Need to initialized variable before using.
    console.log(name);
  //  var name = "Kristin"; // undefined variable
  }
}
sayMyName();
