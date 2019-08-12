function callMe() {
  var lyric = "maybe";
  return lyric;
}


function crazy() {
   var thisIsCrazy =function (){
    console.log("hey!!!")
  }
 return thisIsCrazy;
}
crazy()();
function sayMyName() {
  var name = "Cricky";
  function sayMy() {
    var name = "Kristin";
    console.log(name);
  }
   sayMyName()();
}
