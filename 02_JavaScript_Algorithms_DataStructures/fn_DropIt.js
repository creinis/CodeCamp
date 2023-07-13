
function dropElements(arr, func) {
    if(arr.length == 0 || func(arr[0])) return arr;
    else {
      arr.shift();
      return dropElements(arr, func);
    }
    
  }
  
  dropElements([1, 2, 3], function(n) {return n < 3; });


/*   Drop it

Given the array arr, iterate through and remove each element starting from the first element (the 0 index) until the function func returns true when the iterated element is passed through it.

Then return the rest of the array once the condition is satisfied, otherwise, arr should be returned as an empty array.
Tests

Passed: dropElements([1, 2, 3, 4], function(n) {return n >= 3;}) should return [3, 4].
Passed: dropElements([0, 1, 0, 1], function(n) {return n === 1;}) should return [1, 0, 1].
Passed: dropElements([1, 2, 3], function(n) {return n > 0;}) should return [1, 2, 3].
Passed: dropElements([1, 2, 3, 4], function(n) {return n > 5;}) should return [].
Passed: dropElements([1, 2, 3, 7, 4], function(n) {return n > 3;}) should return [7, 4].
Passed: dropElements([1, 2, 3, 9, 2], function(n) {return n > 2;}) should return [3, 9, 2].
 */