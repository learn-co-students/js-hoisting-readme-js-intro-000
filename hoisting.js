function callMe() {
  var lyric = "maybe";
  return lyric;
}

function crazy() {
  var thisIsCrazy = function (){
    console.log("hey!!!")
  }
  thisIsCrazy();
}

function sayMyName() {
  sayMy();
  function sayMy() {
    var name = "Kristin";
    console.log(name);
  }
}
