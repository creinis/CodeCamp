
function myReplace(str, before, after) {
    if (/[A-Z]/.test(before[0])) {
      after = after.replace(after[0],after[0].toUpperCase());
    } else if(/[a-z]/.test(before[0])) {
      after = after.replace(after[0],after[0].toLowerCase());
    }
    str = str.replace(before, after);
    return str;
  }
  
  myReplace("A quick brown fox jumped over the lazy dog", "jumped", "leaped");


/* Search and Replace

Perform a search and replace on the sentence using the arguments provided and return the new sentence.

First argument is the sentence to perform the search and replace on.

Second argument is the word that you will be replacing (before).

Third argument is what you will be replacing the second argument with (after).

Note: Preserve the case of the first character in the original word when you are replacing it. For example if you mean to replace the word Book with the word dog, it should be replaced as Dog
Tests

Passed: myReplace("Let us go to the store", "store", "mall") should return the string Let us go to the mall.
Passed: myReplace("He is Sleeping on the couch", "Sleeping", "sitting") should return the string He is Sitting on the couch.
Passed: myReplace("I think we should look up there", "up", "Down") should return the string I think we should look down there.
Passed: myReplace("This has a spellngi error", "spellngi", "spelling") should return the string This has a spelling error.
Passed: myReplace("His name is Tom", "Tom", "john") should return the string His name is John.
Passed: myReplace("Let us get back to more Coding", "Coding", "algorithms") should return the string Let us get back to more Algorithms.
 */


