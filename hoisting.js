function callMe() {
  var lyric = "maybe";
  console.log("I just met you...");
  console.log("and this is crazy..");
  console.log("but here's my number..");
  console.log("so call me");
  return lyric;

}

function crazy() {
  // fix the code in here:
  var thisIsCrazy = function (){
    return console.log("hey!!!")
  }
	return thisIsCrazy()
}

function sayMyName() {
  // fix the code in here:
  function sayMy() {
    var name = "Kristin";
    return console.log(name);
  }
  return sayMy()
}
