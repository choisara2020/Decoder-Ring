// Write your tests here!
//write test for caesar function

//import {caesar} from `./src/caesar.js`
const {caesar} = require("../src/caesar");
const expect = require("chai").expect;


//should  return false if shift NOT present.
describe("caesar", () => {
  it("should return false if shift not present", () => {
    let input = "hey";
    let shift = undefined;
    let actual = caesar(input, shift, (encode = true));
    let expected = false;
    expect(actual).to.equal(expected);
  });
  //should return false if shift = 0
  it("should return false if shift = 0", () => {
    let input = "hey";
    let shift = 0;
    let actual = caesar(input, shift, (encode = true));
    let expected = false;
    expect(actual).to.equal(expected);
  });
  //should return false if shift is greater than 25
  it("should return false if shift is greater than 25", () => {
    let input = "hey";
    let shift = 30;
    let actual = caesar(input, shift, (encode = true));
    let expected = false;
    expect(actual).to.equal(expected);
  });
  //should return false if shift less than -25
  it("should return false if shift less than -25", () => {
    let input = "hey";
    let shift = -30;
    let actual = caesar(input, shift, (encode = true));
    let expected = false;
    expect(actual).to.equal(expected);
  });
  //should return wklqnixo when given thinkful
  it("should return wklqnixo when given thinkful", () => {
    let input = "thinkful";
    let shift = 3;
    let actual = caesar(input, shift, (encode = true));
    let expected = "wklqnixo";
    expect(actual).to.equal(expected);
  });
  //should decode 'bpqa qa i amkzmb umaaiom
  it("should decode 'bpqa qa i amkzmb umaaiom!' to 'this is a secret message!'", () => {
    let input = "bpqa qa i amkzmb umaaiom";
    let shift = -8;
    let actual = caesar(input, shift, (encode = true));
    let expected = "this is a secret message";
    expect(actual).to.equal(expected);
  });
  //should return thinkful when given wklqnixo
  it("should return thinkful when given wklqnixo", () => {
    let input = "wklqnixo";
    let shift = -3;
    let actual = caesar(input, shift, (encode = true));
    let expected = "thinkful";
    expect(actual).to.equal(expected);
  });
  //spaces and characters should be maintained
  it("spaces and characters should be maintained", () => {
    let input = "@#$% *&^&*&^ @#$%$#@";
    let shift = -3;
    let actual = caesar(input, shift, (encode = true));
    let expected = "@#$% *&^&*&^ @#$%$#@";
    expect(actual).to.equal(expected);
  });
  //should invert shift (decode) if encode is false
  it("should invert shift (decode) if encode is false", () => {
    let input = "bpqa qa i amkzmb umaaiom";
    let shift = 8;
    let encode = false;
    let actual = caesar(input, shift, encode);
    let expected = "this is a secret message";
    expect(actual).to.equal(expected);
  });
  //should ignore capital letters
  it("should ignore capital letters", () => {
    let input1 = "A Message";
    let input2 = "a message";
    let shift = 8;
    let encode = true;
    let actual = caesar(input1, shift, encode);
    let expected = caesar(input2, shift, encode);
    expect(actual).to.equal(expected);
  });
  //should handle shifts that go past the end of the alphabet
  it("should handle shifts that go past the end of the alphabet.", () => {
    let input1 = "z";
    let shift = 3;
    let encode = true;
    let actual = caesar(input1, shift, encode);
    let expected = "c";
    expect(actual).to.equal(expected);
  });
});

//check instructions for all tests.
//input refers to the inputted text to be encoded or decoded.
//shift refers to how much each letter is "shifted" by. A positive number means shifting to the right ( A becomes D) whereas a negative number means shifting to the left. (M becomes K)
//encode refers to whether you should encode or decode the message. 
//by default it is set to TRUE.
//building the function keep the following in mind:
//if SHIFT value isn't present, equal to 0, less than -25, greater than 25, the function should return false.
//spaces should be maintained throughout, as should other non-alphabetic symbols.
//capital letters can be IGNORED
//if a letter is shifted so that it goes "off" the alphabet (shift of 3 on Z) it should wrap around to the front of the alphabet. (Z becomes C)