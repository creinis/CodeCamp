
function steamrollArray(arr) {
    let flat = [];
  
    function toflat(n) {
        Array.isArray(n) ? n.forEach(toflat) : flat.push(n);
    }
    arr.forEach(toflat);
    return flat;
  }
  
  steamrollArray([1, [2], [3, [[4]]]]);

  /* Steamroller

  Flatten a nested array. You must account for varying levels of nesting.
  Tests
  
  Passed: steamrollArray([[["a"]], [["b"]]]) should return ["a", "b"].
  Passed: steamrollArray([1, [2], [3, [[4]]]]) should return [1, 2, 3, 4].
  Passed: steamrollArray([1, [], [3, [[4]]]]) should return [1, 3, 4].
  Passed: steamrollArray([1, {}, [3, [[4]]]]) should return [1, {}, 3, 4].
  Passed: Your solution should not use the Array.prototype.flat() or Array.prototype.flatMap() methods.
  Passed: Global variables should not be used.
   */
