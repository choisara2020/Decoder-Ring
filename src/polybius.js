
// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (e.g., helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const polybiusModule = (function () {

  function polybius(input, encode = true) {
    //create our polybius square collection
    //create object with key value pairs of alphabet polybius square
    const polybiusSquare = {
      1: { 1: 'a', 2: 'b', 3: 'c', 4: 'd', 5: 'e'},
      2: { 1: 'f', 2: 'g', 3: 'h', 4: 'i/j', 5: 'k'},
      3: { 1: 'l', 2: 'm', 3: 'n', 4: 'o', 5: 'p'},
      4: { 1: 'q', 2: 'r', 3: 's', 4: 't', 5: 'u'},
      5: { 1: 'v', 2: 'w', 3: 'x', 4: 'y', 5: 'z'},
    };

    const message = input.toLowerCase().split(''); 
    //our input is individual letter array
    const messageNoSpaces = message.filter(nums => nums != ' '); 
    //our array  without any spaces
    if(!encode){ //then we decode string
      let decodeString = '';
      if(messageNoSpaces.length % 2 != 0) return false; 
      //copy our array without spaces to check if there are odd number of numbers
      for(let index = 0; index < message.length; index += 2){
        //need to be in [column][row] format
        if(message[index] === ' '){ 
          //if theres a space in the input add it to our decodeString
          decodeString += ' ';
          index--; 
          //reset index a space since our value was a space
        }else{ decodeString += polybiusSquare[message[index + 1]][message[index]]; } //decode
      }
      return decodeString;
    }else{ //else we encode
      const newEncryption = [];
      for(let letter of message){ 
        //for each letter we will find the key/value pair by:
        if(letter === ' '){ newEncryption.push(' '); } 
        //keep our spaces
        for(let c = 1; c < 6; c++){ //cycling each column
          for(let r = 1; r < 6; r++){ //cycling each row
            if(polybiusSquare[c][r].includes(letter)){
              newEncryption.push(r);
              newEncryption.push(c);
            } 
          }
        }
      }
      return newEncryption.join('');
    }
  }

  return {
    polybius,
  };
})();

module.exports = { polybius: polybiusModule.polybius };