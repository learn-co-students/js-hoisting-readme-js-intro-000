function callMe() {
  console.log("I just met you...");
  console.log("and this is crazy..");
  console.log("but here's my number..");
  console.log("so call me");
  //Define the variable before return to avoid hoisting demerits in js
  var lyric = "maybe";
  return lyric;
  
  //  var lyric = "maybe";

}


function crazy() {
  
  var thisIsCrazy = function (){
    console.log("hey!!!")
  }
  
  // fix the code in here:
  thisIsCrazy();
//The below function definition must be placed before the function call
  /*var thisIsCrazy = function (){
    console.log("hey!!!")
  }*/
}

function sayMyName() {
  // fix the code in here:
  var name = "Cricky";
  //The function call should be only after it is defined
//  sayMy();

  function sayMy() {
    var name = "Kristin";
    console.log(name);
    //name variable must be defined before the console print
  //  var name = "Kristin";
  }
   sayMy();
}
