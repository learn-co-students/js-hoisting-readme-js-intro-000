// hoisting callMe returns the string 'maybe'
function callMe() {
  console.log("I just met you...");
  console.log("and this is crazy..");
  console.log("but here's my number..");
  console.log("so call me");
  var lyric = "maybe";
  return lyric;
}
callMe();

// hoisting loggers crazy prints 'hey!!!' to the console from the nested function:
function crazy() {
  // fix the code in here:

  var thisIsCrazy = (function (){
    console.log("hey!!!")
  })
  thisIsCrazy();
}

// hoisting loggers sayMyName prints 'Kristin' to the console from the nested function
function sayMyName() {
  // fix the code in here:
  var name = "Cricky";

  sayMy();

  function sayMy() {
    var name = "Kristin";
    console.log(name);
  }
}
sayMyName()
