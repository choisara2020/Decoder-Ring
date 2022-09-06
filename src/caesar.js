// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const caesarModule = (function () {
  // you can add any code you want within this function scope

//complete the caesar function
//cesar shift the alphabet to the right by 3 A => D
//when decoding the message you need to know the number the original message was shifted by so that you can shift in the opposite direction

//cesar function has 3 parameters.
//input refers to the inputted text to be encoded or decoded.
//shift refers to how much each letter is "shifted" by. A positive number means shifting to the right ( A becomes D) whereas a negative number means shifting to the left. (M becomes K)
//encode refers to whether you should encode or decode the message. 
//by default it is set to TRUE.
//building the function keep the following in mind:
//if SHIFT value isn't present, equal to 0, less than -25, greater than 25, the function should return false.
//spaces should be maintained throughout, as should other non-alphabetic symbols.
//capital letters can be IGNORED
//if a letter is shifted so that it goes "off" the alphabet (shift of 3 on Z) it should wrap around to the front of the alphabet. (Z becomes C)
function caesar(input, shift, encode = true) {
    // if shift value not present equal 0 if less than -25 or greater than 25 return false
    if (!shift || shift === 0 || shift > 25 || shift < -25) {
      return false;
      //if encode === false then 0 - shift
      //spaces maintained and it will allow to shift to the right
    }

    if (!encode) shift *= -1; //invert shift if decoding

    //ignore capital letters
    let message = input.toLowerCase();

    let final = ""; //empty string to store message

    //loop through input
    for (let i = 0; i < message.length; i++) {
      let letter = message[i];
      //Should: if a letter is shifted so that it goes "off" the alphabet (shift of 3 on Z) it should wrap around to the front of the alphabet. (Z becomes C)

      if (letter.match(/[a-z]/)) {  //string match check character is in alphabet
        //if given character is in the alphabet

        //shift the charcode of the character
        let code = message.charCodeAt(i) + shift;

        if (code > 122) { //charCodeAt "122": "z"
          code = code - 26; //26 number of letters in alphabet
        }
        if (code < 97) {  //charCodeAt "97": "a"
          code = code + 26;  //26 number of letters in alphabet
        }
        let newLetter = String.fromCharCode(code);
        final += newLetter;
      } else {
        final += letter;
      }
    }
    console.log(final);
    return final; //return message
  }

  return {
    caesar,
  };
})();

//export {caesar};
module.exports = { caesar: caesarModule.caesar };
