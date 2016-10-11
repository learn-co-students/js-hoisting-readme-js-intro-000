var lyric = "maybe";
function callMe() {
  console.log("I just met you...");
  console.log("and this is crazy..");
  console.log("but here's my number..");
  console.log("so call me");
  return lyric;
}

function crazy() {
  var crazyMessage = "hey!!!"
  // fix the code in here:
  return function() {
    console.log(crazyMessage)
    }
}

var theCrazy = crazy()();
theCrazy;

function sayMyName() {
  // fix the code in here:
  var name = "Cricky";
  return function sayMy() {
    var name = "Kristin";
    console.log(name);
  }
}
var sayMyNameNow = sayMyName()();
sayMyNameNow;
