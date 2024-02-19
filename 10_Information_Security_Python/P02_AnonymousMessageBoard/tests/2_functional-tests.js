const chaiHttp = require('chai-http');
const chai = require('chai');
const assert = chai.assert;
const server = require('../server');

chai.use(chaiHttp);




// Test03 - Deleting a thread with the incorrect password: DELETE request to /api/threads/{board} with an invalid delete_password
// Test04 - Deleting a thread with the correct password: DELETE request to /api/threads/{board} with a valid delete_password
// Test05 - Reporting a thread: PUT request to /api/threads/{board}
// Test06 - Creating a new reply: POST request to /api/replies/{board}
// Test07 - Viewing a single thread with all replies: GET request to /api/replies/{board}
// Test08 - Deleting a reply with the incorrect password: DELETE request to /api/replies/{board} with an invalid delete_password
// Test09 - Deleting a reply with the correct password: DELETE request to /api/replies/{board} with a valid delete_password
// Test10 - Reporting a reply: PUT request to /api/replies/{board}


suite('Functional Tests', function() {

    // Test01 - Creating a new thread: POST request to /api/threads/{board}
    test("Test01 - Creating a new thread: POST request to /api/threads/{board}", done => {
        chai.request(server)
        .post("/api/threads/test")
        .send({
            board: "test",
            text: "textExemple",
            delete_password: "delete_me"
        })
        .end((err, res) => {
            assert.equal(res.status, 200)
        })
        done()
    })
    // Test02 - Viewing the 10 most recent threads with 3 replies each: GET request to /api/threads/{board}
    test("Test02 - Viewing the 10 most recent threads with 3 replies each: GET request to /api/threads/{board}", done => {
        chai.request(server)
        .get("/api/threads/test")
        .end((err, res) => {
            assert.equal(res.status, 200)
            assert.isArray(res.body)
            assert.isBelow(res.body.length, 11)
            assert.isBelow(res.body[0].replies.length, 4)
            testThreadId0 = String(res.body[0]._id)
            testThreadId1 = String(res.body[1]._id)
        })
        done()
    })


});
