const chai = require("chai");
const assert = chai.assert;

const Translator = require("../components/translator.js");
let translator = new Translator();

suite("Unit Tests", () => {
  // Test 01 - Translate Mangoes are my favorite fruit. to British English
  test("Test 01 - Translate Mangoes are my favorite fruit. to British English", (done) => {
    assert.equal(
      translator.translateAmericanToBritish(
        "Mangoes are my favorite fruit.",
      )[0],
      "Mangoes are my favourite fruit.",
    );
    done();
  });

  // Test 02 - Translate I ate yogurt for breakfast. to British English
  test("Test 02 - Translate I ate yogurt for breakfast. to British English", (done) => {

    assert.equal(
      translator.translateAmericanToBritish(
        "I ate yogurt for breakfast.")[0], "I ate yoghurt for breakfast.");
    done();
  });

  // Test 03 - Translate We had a party at my friend's condo. to British English
  test("Test 03 - Translate We had a party at my friend's condo. to British English", (done) => {
    assert.equal(
        translator.translateAmericanToBritish(
          "We had a party at my friend's condo.",
        )[0],
        "We had a party at my friend's flat.",
      );
      done();
  });

  // Test 04 - Translate Can you toss this in the trashcan for me? to British English
  test("Test 04 - Translate Can you toss this in the trashcan for me? to British English", (done) => {
    assert.equal(
        translator.translateAmericanToBritish(
          "Can you toss this in the trashcan for me?",
        )[0],
        "Can you toss this in the bin for me?",
      );
      done();
  });

  // Test 05 - Translate The parking lot was full. to British English
  test("Test 05 - Translate The parking lot was full. to British English", (done) => {
    assert.equal(
        translator.translateAmericanToBritish(
          "The parking lot was full.",
        )[0],
        "The car park was full.",
      );
      done();
  });

  // Test 06 - Translate Like a high tech Rube Goldberg machine. to British English
  test("Test 06 - Translate Like a high tech Rube Goldberg machine. to British English", (done) => {
    assert.equal(
        translator.translateAmericanToBritish(
          "Like a high tech Rube Goldberg machine.",
        )[0],
        "Like a high tech Heath Robinson device.",
      );
      done();
  });

  // Test 07 - Translate To play hooky means to skip class or work. to British English
  test("Test 07 - Translate To play hooky means to skip class or work. to British English", (done) => {
    assert.equal(
        translator.translateAmericanToBritish(
          "To play hooky means to skip class or work.",
        )[0],
        "To bunk off means to skip class or work.",
      );
      done();
  });

  // Test 08 - Translate No Mr. Bond, I expect you to die. to British English
  test("Test 08 - Translate No Mr. Bond, I expect you to die. to British English", (done) => {
    assert.equal(
        translator.translateAmericanToBritish(
          "No Mr. Bond, I expect you to die.",
        )[0],
        "No Mr Bond, I expect you to die.",
      );
      done();
  });

  // Test 09 - Translate Dr. Grosh will see you now. to British English
  test("Test 09 - Translate Dr. Grosh will see you now. to British English", (done) => {
    assert.equal(
        translator.translateAmericanToBritish(
          "Dr. Grosh will see you now.",
        )[0],
        "Dr Grosh will see you now.",
      );
      done();
  });

  // Test 10 - Translate Lunch is at 12:15 today. to British English
  test("Test 10 - Translate Lunch is at 12:15 today. to British English", (done) => {
    assert.equal(
        translator.translateAmericanToBritish(
          "Lunch is at 12:15 today.",
        )[0],
        "Lunch is at 12.15 today.",
      );
      done();
  });

  // Test 11 - Translate We watched the footie match for a while. to American English
  test("Test 11 - Translate We watched the footie match for a while. to American English", (done) => {
    assert.equal(
        translator.translateBritishToAmerican(
          "We watched the footie match for a while.",
        )[0],
        "We watched the soccer match for a while.",
      );
      done();
  });

  // Test 12 - Translate Paracetamol takes up to an hour to work. to American English
  test("Test 12 - Translate Paracetamol takes up to an hour to work. to American English", (done) => {
    assert.equal(
        translator.translateBritishToAmerican(
          "Paracetamol takes up to an hour to work.",
        )[0],
        "Tylenol takes up to an hour to work.",
      );
      done();
  });

  // Test 13 - Translate First, caramelise the onions. to American English
  test("Test 13 - Translate First, caramelise the onions. to American English", (done) => {
    assert.equal(
        translator.translateBritishToAmerican(
          "First, caramelise the onions.",
        )[0],
        "First, caramelize the onions.",
      );
      done();
  });

  // Test 14 - Translate I spent the bank holiday at the funfair. to American English
  test("Test 14 - Translate I spent the bank holiday at the funfair. to American English", (done) => {
    assert.equal(
        translator.translateBritishToAmerican(
          "I spent the bank holiday at the funfair.",
        )[0],
        "I spent the public holiday at the carnival.",
      );
      done();
  });

  // Test 15 - Translate I had a bicky then went to the chippy. to American English
  test("Test 15 - Translate I had a bicky then went to the chippy. to American English", (done) => {
    assert.equal(
        translator.translateBritishToAmerican(
          "I had a bicky then went to the chippy.",
        )[0],
        "I had a cookie then went to the fish-and-chip shop.",
      );
      done();
  });

  // Test 16 - Translate I've just got bits and bobs in my bum bag. to American English
  test("Test 16 - Translate I've just got bits and bobs in my bum bag. to American English", (done) => {
    assert.equal(
        translator.translateBritishToAmerican(
          "I've just got bits and bobs in my bum bag.",
        )[0],
        "I've just got odds and ends in my fanny pack.",
      );
      done();
  });

  // Test 17 - Translate The car boot sale at Boxted Airfield was called off. to American English
  test("Test 17 - Translate The car boot sale at Boxted Airfield was called off. to American English", (done) => {
    assert.equal(
        translator.translateBritishToAmerican(
          "The car boot sale at Boxted Airfield was called off.",
        )[0],
        "The swap meet at Boxted Airfield was called off.",
      );
      done();
  });

  // Test 18 - Translate Have you met Mrs Kalyani? to American English
  test("Test 18 - Translate Have you met Mrs Kalyani? to American English", (done) => {
    assert.equal(
        translator.translateBritishToAmerican(
          "Have you met Mrs Kalyani?",
        )[0],
        "Have you met Mrs. Kalyani?",
      );
      done();
  });

  // Test 19 - Translate Prof Joyner of King's College, London. to American English
  test("Test 19 - Translate Prof Joyner of King's College, London. to American English", (done) => {
    assert.equal(
        translator.translateBritishToAmerican(
          "Prof Joyner of King's College, London. to American English",
        )[0],
        "Prof. Joyner of King's College, London. to American English",
      );
      done();
  });

  // Test 20 - Translate Tea time is usually around 4 or 4.30. to American English
  test("Test 20 - Translate Tea time is usually around 4 or 4.30. to American English", (done) => {
    assert.equal(
        translator.translateBritishToAmerican(
          "Tea time is usually around 4 or 4.30.",
        )[0],
        "Tea time is usually around 4 or 4:30.",
      );
      done();
  });

  // Test 21 - Highlight translation in Mangoes are my favorite fruit.
  test("Test 21 - Highlight translation in Mangoes are my favorite fruit.", (done) => {
    done();
  });

  // Test 22 - Highlight translation in I ate yogurt for breakfast.
  test("Test 22 - Highlight translation in I ate yogurt for breakfast.", (done) => {
    done();
  });

  // Test 23 - Highlight translation in We watched the footie match for a while.
  test("Test 23 - Highlight translation in We watched the footie match for a while.", (done) => {
    done();
  });

  // Test 24 - Highlight translation in Paracetamol takes up to an hour to work.
  test("Test 24 - Highlight translation in Paracetamol takes up to an hour to work.", (done) => {
    done();
  });
});
