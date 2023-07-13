function spinalCase(str) {
    return str
  .split(/\s|_|(?=[A-Z])/)
  .filter(substr => substr !== "")
  .join("-")
  .toLowerCase();
  
  }
  
  spinalCase('This Is Spinal Tap');


  /* Spinal Tap Case

  Convert a string to spinal case. Spinal case is all-lowercase-words-joined-by-dashes.
  Tests
  
  Passed: spinalCase("This Is Spinal Tap") should return the string this-is-spinal-tap.
  Passed: spinalCase("thisIsSpinalTap") should return the string this-is-spinal-tap.
  Passed: spinalCase("The_Andy_Griffith_Show") should return the string the-andy-griffith-show.
  Passed: spinalCase("Teletubbies say Eh-oh") should return the string teletubbies-say-eh-oh.
  Passed: spinalCase("AllThe-small Things") should return the string all-the-small-things.
   */
