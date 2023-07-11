function findLongestWordLength(str) {
    var strSplit = str.split(' ');
    var longestWord;
    longestWord = 1;
  
    for(var i = 0; i < strSplit.length; i++){
      if(strSplit[i].length >= longestWord){
        longestWord = strSplit[i].length
      }
    }
    return longestWord;
  }
  
  findLongestWordLength("The quick brown fox jumped over the lazy dog");

/*   Find the Longest Word in a String

  Return the length of the longest word in the provided sentence.
  
  Your response should be a number.
  */ 

