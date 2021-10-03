// const findNeedle = function(words) {
//     return words.indexOf("needle");
//   };
  
//   module.exports = findNeedle;

//of beter dynamischer
const findNeedle = function(words, wordToBeFound) {
    return words.indexOf(wordToBeFound);
  };
  
module.exports = findNeedle;