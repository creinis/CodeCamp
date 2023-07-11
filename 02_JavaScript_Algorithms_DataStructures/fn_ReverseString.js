function reverseString(str) {
    let newStr = "";
    let i = 0;
    
    for (i = str.length - 1; i >= 0; i--) {
   
      newStr += str[i];
    }
    return newStr;
  }
  
  reverseString("hello");

/*   Reverse a String

Reverse the provided string and return the reversed string.

For example, "hello" should become "olleh".
 */