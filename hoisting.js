function callMe() {
  var lyric;
  console.log(lyric);
  lyric = "maybe";
}


function crazy() {
  // fix the code in here:
  thisIsCrazy();

  var thisIsCrazy = function (){
    console.log("hey!!!")
  }
}

function sayMyName() {
  // fix the code in here:
  var name = "Cricky";

  sayMy();

  function sayMy() {
    console.log(name);
    var name = "Kristin";
  }
}
