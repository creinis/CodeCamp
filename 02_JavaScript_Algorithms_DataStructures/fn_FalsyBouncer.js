function bouncer(arr) {
    function truth(value) {
      return value;
    }
  
    var removeFalsy = arr.filter(truth);
    return removeFalsy;
  }
  
  bouncer([7, "ate", "", false, 9]);


/*   Falsy Bouncer

Remove all falsy values from an array. Return a new array; do not mutate the original array.

Falsy values in JavaScript are false, null, 0, "", undefined, and NaN.

Hint: Try converting each value to a Boolean.
Tests

Passed: bouncer([7, "ate", "", false, 9]) should return [7, "ate", 9].
Passed: bouncer(["a", "b", "c"]) should return ["a", "b", "c"].
Passed: bouncer([false, null, 0, NaN, undefined, ""]) should return [].
Passed: bouncer([null, NaN, 1, 2, undefined]) should return [1, 2].
Passed: You should not mutate arr.
 */