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
// Test 09 - Translate Dr. Grosh will see you now. to British English
// Test 10 - Translate Lunch is at 12:15 today. to British English
// Test 11 - Translate We watched the footie match for a while. to American English
// Test 12 - Translate Paracetamol takes up to an hour to work. to American English
// Test 13 - Translate First, caramelise the onions. to American English
// Test 14 - Translate I spent the bank holiday at the funfair. to American English
// Test 15 - Translate I had a bicky then went to the chippy. to American English
// Test 16 - Translate I've just got bits and bobs in my bum bag. to American English
// Test 17 - Translate The car boot sale at Boxted Airfield was called off. to American English
// Test 18 - Translate Have you met Mrs Kalyani? to American English
// Test 19 - Translate Prof Joyner of King's College, London. to American English
// Test 20 - Translate Tea time is usually around 4 or 4.30. to American English
// Test 21 - Highlight translation in Mangoes are my favorite fruit.
// Test 22 - Highlight translation in I ate yogurt for breakfast.
// Test 23 - Highlight translation in We watched the footie match for a while.
// Test 24 - Highlight translation in Paracetamol takes up to an hour to work.

    // Outros testes similares para os outros casos de tradução...
});

