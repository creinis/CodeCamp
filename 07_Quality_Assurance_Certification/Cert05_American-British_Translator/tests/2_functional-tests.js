const chai = require('chai');
const chaiHttp = require('chai-http');
const assert = chai.assert;
const server = require('../server.js');

chai.use(chaiHttp);


suite('Functional Tests', () => {
    test('Test01 - Translation with text and locale fields: POST request to /api/translate', (done) => {
        chai.request(server)
            .post('/api/translate')
            .send({ text: "Mangoes are my favorite fruit.", locale: "american-to-british" })
            .end((err, res) => {
                assert.equal(res.status, 200);
                assert.property(res.body, 'text');
                assert.property(res.body, 'translation');
                assert.equal(res.body.text, 'Mangoes are my favorite fruit.');
                assert.equal(res.body.translation, 'Mangoes are my favourite fruit.');
                done();
            });
    });

    
// Test02 - Translation with text and invalid locale field: POST request to /api/translate
// Test03 - Translation with missing text field: POST request to /api/translate
// Test04 - Translation with missing locale field: POST request to /api/translate
// Test05 - Translation with empty text: POST request to /api/translate
// Test06 - Translation with text that needs no translation: POST request to /api/translate

});
