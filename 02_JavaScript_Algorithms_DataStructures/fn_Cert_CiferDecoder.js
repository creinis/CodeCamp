
const rot13 = str => {
    let decodedCipher = ''
    
    
   
    str.split('').forEach(character => {
      
      const letterChar = character.charCodeAt()
      
      
      let unicode = letterChar < 65 || letterChar > 90 ? letterChar : letterChar + 13
  
      
      if((unicode - 1) >= 90) unicode = (((unicode - 1) - 90) + 65)
  
      
      decodedCipher += String.fromCharCode(unicode)
    })
  
    return decodedCipher;
  }
  
  rot13("GUR DHVPX OEBJA SBK WHZCF BIRE GUR YNML QBT.");

/*   Caesars Cipher

One of the simplest and most widely known ciphers is a Caesar cipher, also known as a shift cipher. In a shift cipher the meanings of the letters are shifted by some set amount.

A common modern use is the ROT13 cipher, where the values of the letters are shifted by 13 places. Thus A ↔ N, B ↔ O and so on.

Write a function which takes a ROT13 encoded string as input and returns a decoded string.

All letters will be uppercase. Do not transform any non-alphabetic character (i.e. spaces, punctuation), but do pass them on.
Tests

Passed: rot13("SERR PBQR PNZC") should decode to the string FREE CODE CAMP
Passed: rot13("SERR CVMMN!") should decode to the string FREE PIZZA!
Passed: rot13("SERR YBIR?") should decode to the string FREE LOVE?
Passed: rot13("GUR DHVPX OEBJA SBK WHZCF BIRE GUR YNML QBT.") should decode to the string THE QUICK BROWN FOX JUMPS OVER THE LAZY DOG.
 */
  