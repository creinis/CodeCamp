function destroyer(arr) {
    const arr1 = arr.slice(arguments);
    const arr2 = Array.prototype.slice.call(arguments, 1);
    return arr1.concat(arr2).filter(function(i) {
      return !arr1.includes(i) || !arr2.includes(i)
    })
  }
  
  destroyer([1, 2, 3, 1, 2, 3], 2, 3);


/*   Seek and Destroy

You will be provided with an initial array (the first argument in the destroyer function), followed by one or more arguments. Remove all elements from the initial array that are of the same value as these arguments.

Note: You have to use the arguments object.
Tests

Passed: destroyer([1, 2, 3, 1, 2, 3], 2, 3) should return [1, 1].
Passed: destroyer([1, 2, 3, 5, 1, 2, 3], 2, 3) should return [1, 5, 1].
Passed: destroyer([3, 5, 1, 2, 2], 2, 3, 5) should return [1].
Passed: destroyer([2, 3, 2, 3], 2, 3) should return [].
Passed: destroyer(["tree", "hamburger", 53], "tree", 53) should return ["hamburger"].
Passed: destroyer(["possum", "trollo", 12, "safari", "hotdog", 92, 65, "grandma", "bugati", "trojan", "yacht"], "yacht", "possum", "trollo", "safari", "hotdog", "grandma", "bugati", "trojan") should return [12,92,65]. */