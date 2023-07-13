function diffArray(arr1, arr2) {
    const newArr = arr1
    .filter(x => !arr2.includes(x))
    .concat(arr2.filter(x => !arr1.includes(x)));
    return newArr;
  }
  
  diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]);


  /* Diff Two Arrays

  Compare two arrays and return a new array with any items only found in one of the two given arrays, but not both. In other words, return the symmetric difference of the two arrays.
  
  Note: You can return the array with its elements in any order.
  Tests
  
  Passed: diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]) should return an array.
  Passed: ["diorite", "andesite", "grass", "dirt", "pink wool", "dead shrub"], ["diorite", "andesite", "grass", "dirt", "dead shrub"] should return ["pink wool"].
  Passed: ["diorite", "andesite", "grass", "dirt", "pink wool", "dead shrub"], ["diorite", "andesite", "grass", "dirt", "dead shrub"] should return an array with one item.
  Passed: ["andesite", "grass", "dirt", "pink wool", "dead shrub"], ["diorite", "andesite", "grass", "dirt", "dead shrub"] should return ["diorite", "pink wool"].
  Passed: ["andesite", "grass", "dirt", "pink wool", "dead shrub"], ["diorite", "andesite", "grass", "dirt", "dead shrub"] should return an array with two items.
  Passed: ["andesite", "grass", "dirt", "dead shrub"], ["andesite", "grass", "dirt", "dead shrub"] should return [].
  Passed: ["andesite", "grass", "dirt", "dead shrub"], ["andesite", "grass", "dirt", "dead shrub"] should return an empty array.
  Passed: [1, 2, 3, 5], [1, 2, 3, 4, 5] should return [4].
  Passed: [1, 2, 3, 5], [1, 2, 3, 4, 5] should return an array with one item.
  Passed: [1, "calf", 3, "piglet"], [1, "calf", 3, 4] should return ["piglet", 4].
  Passed: [1, "calf", 3, "piglet"], [1, "calf", 3, 4] should return an array with two items.
  Passed: [], ["snuffleupagus", "cookie monster", "elmo"] should return ["snuffleupagus", "cookie monster", "elmo"].
  Passed: [], ["snuffleupagus", "cookie monster", "elmo"] should return an array with three items.
  Passed: [1, "calf", 3, "piglet"], [7, "filly"] should return [1, "calf", 3, "piglet", 7, "filly"].
  Passed: [1, "calf", 3, "piglet"], [7, "filly"] should return an array with six items.
 */