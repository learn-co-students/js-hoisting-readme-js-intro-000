
///////////////////////////////////////////////////////////////////////////////
/*
describe('callMe', () => {
  it("returns the string 'maybe'", () => {
    expect(callMe()).to.equal("maybe");
  })
})
*/
function callMe() {
//  var lyric = "maybe"; //OLLADD

  console.log("I just met you...");
  console.log("and this is crazy..");
  console.log("but here's my number..");
  console.log("so call me");
//  return lyric;        //OLLADD



///  return lyric;
    var lyric = "maybe";
    return lyric;
}
///////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////
/*
describe('crazy', () => {
  it("prints 'hey!!!' to the console from the nested function", () => {
    crazy()

    expect(console.log).to.have.been.called.with("hey!!!")
  })
})
*/
function crazy() {
  var thisIsCrazy = function (){
    console.log("hey!!!")
  }


  // fix the code in here:
  thisIsCrazy();

//OLLBLL  var thisIsCrazy = function (){
//OLLBLL    console.log("hey!!!")
//OLLBLL  }
}




///////////////////////////////////////////////////////////////////////////////
/*
describe('sayMyName', () => {
  it("prints 'Kristin' to the console from the nested function", () => {
    sayMyName()
    expect(console.log).to.have.been.called.with("Kristin")
  })
})
*/
function sayMyName() {
  // fix the code in here:
  function sayMy() {
    var name = "Kristin";
    console.log(name);
//OLLBLL    var name = "Kristin";
  }


  var name = "Cricky";

  sayMy();

//OLLBLL  function sayMy() {
//OLLBLL    console.log(name);
//OLLBLL    var name = "Kristin";
//OLLBLL  }
}
