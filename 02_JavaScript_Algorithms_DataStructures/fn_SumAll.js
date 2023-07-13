function sumAll(arr) {
    arr.sort(function(a, b) {return a-b;});
    
    var accumulator = 0;
    for(var i = arr[0]; i <= arr[1]; ++i)
    accumulator = accumulator + i;
    return accumulator;
  }
  
  sumAll([1, 4]);


  /* Sum All Numbers in a Range

  We'll pass you an array of two numbers. Return the sum of those two numbers plus the sum of all the numbers between them. The lowest number will not always come first.
  
  For example, sumAll([4,1]) should return 10 because sum of all the numbers between 1 and 4 (both inclusive) is 10.
  Tests
  
  Passed: sumAll([1, 4]) should return a number.
  Passed: sumAll([1, 4]) should return 10.
  Passed: sumAll([4, 1]) should return 10.
  Passed: sumAll([5, 10]) should return 45.
  Passed: sumAll([10, 5]) should return 45.
   */