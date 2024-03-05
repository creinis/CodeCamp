const chai = require('chai');
const assert = chai.assert;
const Translator = require('../components/translator.js');





suite('Unit Tests', () => {

    // Test 01 - Translate Mangoes are my favorite fruit. to British English
    test('Test 01 - Translate Mangoes are my favorite fruit. to British English', (done) => {
        const translator = new Translator();
        const text = 'Mangoes are my favorite fruit.';
        const translation = translator.translateAmericanToBritish(text);
        assert.equal(translation, 'Mangoes are my favourite fruit.');
        done();
    });

    // Test 02 - Translate I ate yogurt for breakfast. to British English
    test('Test 02 - Translate I ate yogurt for breakfast. to British English', (done) => {
        const translator = new Translator();
        const text = 'I ate yogurt for breakfast.';
        const translation = translator.translateAmericanToBritish(text);
        assert.equal(translation, 'I ate yoghurt for breakfast.');
        done();
    });

    // Test 03 - Translate We had a party at my friend's condo. to British English
    test('Test 03 - Translate We had a party at my friend\'s condo. to British English', (done) => {
        const translator = new Translator();
        const text = 'We had a party at my friend\'s condo.';
        const translation = translator.translateAmericanToBritish(text);
        assert.equal(translation, 'We had a party at my friend\'s flat.');
        done();
    });
    
    // Test 04 - Translate Can you toss this in the trashcan for me? to British English
    test('Test 04 - Translate Can you toss this in the trashcan for me? to British English', (done) => {
        const translator = new Translator();
        const text = 'Can you toss this in the trashcan for me?';
        const translation = translator.translateAmericanToBritish(text);
        assert.equal(translation, 'Can you toss this in the bin for me?');
        done();
    });

    // Test 05 - Translate The parking lot was full. to British English
    test('Test 05 - Translate The parking lot was full. to British English', (done) => {
        const translator = new Translator();
        const text = 'The parking lot was full.';
        const translation = translator.translateAmericanToBritish(text);
        assert.equal(translation, 'The car park was full.');
        done();
    });

    // Test 06 - Translate Like a high tech Rube Goldberg machine. to British English
    test('Test 06 - Translate Like a high tech Rube Goldberg machine. to British English', (done) => {
        const translator = new Translator();
        const text = 'Like a high tech Rube Goldberg machine.';
        const translation = translator.translateAmericanToBritish(text);
        assert.equal(translation, 'Like a high tech Heath Robinson device.');
        done();
    });

    // Test 07 - Translate To play hooky means to skip class or work. to British English
    test('Test 07 - Translate To play hooky means to skip class or work. to British English', (done) => {
        const translator = new Translator();
        const text = 'To play hooky means to skip class or work.';
        const translation = translator.translateAmericanToBritish(text);
        assert.equal(translation, 'To bunk off means to skip class or work.');
        done();
    });

    // Test 08 - Translate No Mr. Bond, I expect you to die. to British English
    test('Test 08 - Translate No Mr. Bond, I expect you to die. to British English', (done) => {
        const translator = new Translator();
        const text = 'No Mr. Bond, I expect you to die.';
        const translation = translator.translateAmericanToBritish(text);
        assert.equal(translation, 'No Mr Bond, I expect you to die.');
        done();
    });

    // Test 09 - Translate Dr. Grosh will see you now. to British English
    test('Test 09 - Translate Dr. Grosh will see you now. to British English', (done) => {
        const translator = new Translator();
        const text = 'Dr. Grosh will see you now.';
        const translation = translator.translateAmericanToBritish(text);
        assert.equal(translation, 'Dr Grosh will see you now.');
        done();
    });

    // Test 10 - Translate Lunch is at 12:15 today. to British English
    test('Test 10 - Translate Lunch is at 12:15 today. to British English', (done) => {
        const translator = new Translator();
        const text = 'Lunch is at 12:15 today.';
        const translation = translator.translateAmericanToBritish(text);
        assert.equal(translation, 'Lunch is at 12.15 today.');
        done();
    });

    // Test 11 - Translate We watched the footie match for a while. to American English
    test('Test 11 - Translate We watched the footie match for a while. to American English', (done) => {
        const translator = new Translator();
        const text = 'We watched the footie match for a while.';
        const translation = translator.translateAmericanToBritish(text);
        assert.equal(translation, 'We watched the soccer match for a while.');
        done();
    });

    // Test 12 - Translate Paracetamol takes up to an hour to work. to American English
    test('Test 12 - Translate Paracetamol takes up to an hour to work. to American English', (done) => {
        const translator = new Translator();
        const text = 'Paracetamol takes up to an hour to work.';
        const translation = translator.translateAmericanToBritish(text);
        assert.equal(translation, 'Tylenol takes up to an hour to work.');
        done();
    });

    // Test 13 - Translate First, caramelise the onions. to American English
    test('Test 13 - Translate First, caramelise the onions. to American English', (done) => {
        const translator = new Translator();
        const text = 'First, caramelise the onions.';
        const translation = translator.translateAmericanToBritish(text);
        assert.equal(translation, 'First, caramelize the onions.');
        done();
    });

    // Test 14 - Translate I spent the bank holiday at the funfair. to American English
    test('Test 14 - Translate I spent the bank holiday at the funfair. to American English', (done) => {
        const translator = new Translator();
        const text = 'I spent the bank holiday at the funfair.';
        const translation = translator.translateAmericanToBritish(text);
        assert.equal(translation, 'I spent the public holiday at the carnival.');
        done();
    });

    // Test 15 - Translate I had a bicky then went to the chippy. to American English
    test('Test 15 - Translate I had a bicky then went to the chippy. to American English', (done) => {
        const translator = new Translator();
        const text = 'I had a bicky then went to the chippy.';
        const translation = translator.translateAmericanToBritish(text);
        assert.equal(translation, 'I had a cookie then went to the fish-and-chip shop.');
        done();
    });

    // Test 16 - Translate I've just got bits and bobs in my bum bag. to American English
    test('Test 16 - Translate I\'ve just got bits and bobs in my bum bag. to American English', (done) => {
        const translator = new Translator();
        const text = 'I\'ve just got bits and bobs in my bum bag.';
        const translation = translator.translateAmericanToBritish(text);
        assert.equal(translation, 'I\'ve just got odds and ends in my fanny pack.');
        done();
    });

    // Test 17 - Translate The car boot sale at Boxted Airfield was called off. to American English
    test('Test 17 - Translate The car boot sale at Boxted Airfield was called off. to American English', (done) => {
        const translator = new Translator();
        const text = 'The car boot sale at Boxted Airfield was called off.';
        const translation = translator.translateAmericanToBritish(text);
        assert.equal(translation, 'The swap meet at Boxted Airfield was called off.');
        done();
    });

    // Test 18 - Translate Have you met Mrs Kalyani? to American English
    test('Test 18 - Translate Have you met Mrs Kalyani? to American English', (done) => {
        const translator = new Translator();
        const text = 'Have you met Mrs Kalyani?';
        const translation = translator.translateAmericanToBritish(text);
        assert.equal(translation, 'Have you met Mrs. Kalyani?');
        done();
    });

    // Test 19 - Translate Prof Joyner of King's College, London. to American English
    test('Test 19 - Translate Prof Joyner of King\'s College, London. to American English', (done) => {
        const translator = new Translator();
        const text = 'Prof Joyner of King\'s College, London. to American English';
        const translation = translator.translateAmericanToBritish(text);
        assert.equal(translation, 'Prof. Joyner of King\'s College, London. to American English');
        done();
    });



// Test 20 - Translate Tea time is usually around 4 or 4.30. to American English
// Test 21 - Highlight translation in Mangoes are my favorite fruit.
// Test 22 - Highlight translation in I ate yogurt for breakfast.
// Test 23 - Highlight translation in We watched the footie match for a while.
// Test 24 - Highlight translation in Paracetamol takes up to an hour to work.

    // Outros testes similares para os outros casos de tradução...
});

