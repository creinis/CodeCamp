function fearNotLetter(str) {
    str = str.toLowerCase();
    var alpha = 'abcdefghijklmnopqrstuvwxyz';
    var length = str.length;
    var index = alpha.indexOf(str[0]);
  
    for(var i = index; i < index+length; i++){
      if(!str.includes(alpha[i])) {
        return alpha[i]
        };
    }
    return undefined;
  }
  
  fearNotLetter("abce");

  /* Missing letters

  Find the missing letter in the passed letter range and return it.
  
  If all letters are present in the range, return undefined.
  Tests
  
  Passed: fearNotLetter("abce") should return the string d.
  Passed: fearNotLetter("abcdefghjklmno") should return the string i.
  Passed: fearNotLetter("stvwx") should return the string u.
  Passed: fearNotLetter("bcdf") should return the string e.
  Passed: fearNotLetter("abcdefghijklmnopqrstuvwxyz") should return undefined.
   */

