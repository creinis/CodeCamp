
function sumFibs(num) {
  
    var a = 1;
    var b = 1;
    var sum = 0;
  
  while (a <= num && b <= num){
    if(a%2 !==0) {sum = sum+a};
    if(b%2 !==0) {sum = sum+b};
    a = a + b;
    b = a + b;
  }
  if(a<=num && a%2 !==0) {sum= sum + a}
  else if(b<=num && b%2 !==0) {sum= sum + b;}
  
    return sum;
  }
  
  sumFibs(4);


  /* Sum All Odd Fibonacci Numbers

  Given a positive integer num, return the sum of all odd Fibonacci numbers that are less than or equal to num.
  
  The first two numbers in the Fibonacci sequence are 0 and 1. Every additional number in the sequence is the sum of the two previous numbers. The first seven numbers of the Fibonacci sequence are 0, 1, 1, 2, 3, 5 and 8.
  
  For example, sumFibs(10) should return 10 because all odd Fibonacci numbers less than or equal to 10 are 1, 1, 3, and 5.
  Tests
  
  Passed: sumFibs(1) should return a number.
  Passed: sumFibs(1000) should return 1785.
  Passed: sumFibs(4000000) should return 4613732.
  Passed: sumFibs(4) should return 5.
  Passed: sumFibs(75024) should return 60696.
  Passed: sumFibs(75025) should return 135721.
   */
