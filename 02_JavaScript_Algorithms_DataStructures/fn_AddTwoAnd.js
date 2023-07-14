
function addTogether() {

    const args = arguments;
    const num1 = args[0];
    const num2 = args[1];
    
    if(typeof(num1) !== "number") {
      return undefined;
      } else if(arguments.length == 1) {
        function addTwoAnd(num2) {
          if(typeof(num2) !== 'number') {
            return undefined;
          } else {
            return num1 + num2;
          }
        }
        return addTwoAnd;
      } else if (typeof(num2) !== "number"){
        return undefined;
      }
      else  {
        return num1 + num2;
        }
    };
    
    
    
    
    addTogether(2,3);

/*     Arguments Optional

Create a function that sums two arguments together. If only one argument is provided, then return a function that expects one argument and returns the sum.

For example, addTogether(2, 3) should return 5, and addTogether(2) should return a function.

Calling this returned function with a single argument will then return the sum:

var sumTwoAnd = addTogether(2);

sumTwoAnd(3) returns 5.

If either argument isn't a valid number, return undefined.
Tests

Passed: addTogether(2, 3) should return 5.
Passed: addTogether(23, 30) should return 53.
Passed: addTogether("2", 3) should return undefined.
Passed: addTogether(5, undefined) should return undefined.
Passed: addTogether("https://www.youtube.com/watch?v=dQw4w9WgXcQ") should return undefined.
Passed: addTogether(5) should return a function.
Passed: addTogether(5)(7) should return 12.
Passed: addTogether(2)([3]) should return undefined.
Passed: addTogether(2, "3") should return undefined.
 */
