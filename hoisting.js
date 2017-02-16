function callMe() {
  var lyric = "maybe";
  return lyric;
}

callMe()


var crazy = function() {
  var thisIsCrazy = function() {
    console.log("hey!!!")
  }
  thisIsCrazy();
}

crazy()

function sayMyName() {
  var name = "Cricky";

  function sayMy() {
    var name = "Kristin"
    console.log(name);
  }
  sayMy()
}

sayMyName()
