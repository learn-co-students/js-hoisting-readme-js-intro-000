function callMe()
{
  var lyric = "maybe";

  console.log("I just met you...");
  console.log("and this is crazy..");
  console.log("but here's my number..");
  console.log("so call me");
  return lyric;
}
callMe();

function crazy()
{
  var thisIsCrazy = function (){
    console.log("hey!!!")
  }
  
  return thisIsCrazy();
}

crazy();

function sayMyName()
{
  var name = "Cricky";

  function sayMy()
  {
    console.log(name);
    var name = "Kristin";
    console.log(name);
  }
  
  return sayMy();
}

sayMyName();