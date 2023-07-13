function pairElement(str) {
    str = str.split('');
    var dna = [];
    for(var i = 0; i < str.length; i++) 
    {
      var pair = [];
      switch(str[i]){
        case "G":
          pair.push(str[i]);
          pair.push('C')
          break;
        case "C":
          pair.push(str[i]);
          pair.push('G')
          break;
        case "A":
          pair.push(str[i]);
          pair.push('T')
          break;
        case "T":
          pair.push(str[i]);
          pair.push('A')
          break;
      };
      if(pair.length > 0) dna.push(pair);
    }
    return dna;
  }
  
  pairElement("GCG");


/*   DNA Pairing

Pairs of DNA strands consist of nucleobase pairs. Base pairs are represented by the characters AT and CG, which form building blocks of the DNA double helix.

The DNA strand is missing the pairing element. Write a function to match the missing base pairs for the provided DNA strand. For each character in the provided string, find the base pair character. Return the results as a 2d array.

For example, for the input GCG, return [["G", "C"], ["C","G"], ["G", "C"]]

The character and its pair are paired up in an array, and all the arrays are grouped into one encapsulating array.
Tests

Passed: pairElement("ATCGA") should return [["A","T"],["T","A"],["C","G"],["G","C"],["A","T"]].
Passed: pairElement("TTGAG") should return [["T","A"],["T","A"],["G","C"],["A","T"],["G","C"]].
Passed: pairElement("CTCTA") should return [["C","G"],["T","A"],["C","G"],["T","A"],["A","T"]].
 */
