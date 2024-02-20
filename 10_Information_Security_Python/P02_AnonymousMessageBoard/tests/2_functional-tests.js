const chaiHttp = require('chai-http');
const chai = require('chai');
const assert = chai.assert;
const server = require('../server');

chai.use(chaiHttp);

suite('Functional Tests', function() {

    let testThreadId;
    let testReplyId;

    // Test01 - Creating a new thread: POST request to /api/threads/{board}
    test("Test01 - Creating a new thread: POST request to /api/threads/{board}", done => {
        chai.request(server)
        .post(`/api/threads/test-board`)
        .send({
            board: 'test-board',
            text: 'textExemple Test01',
            delete_password: 'delete_me'
        })
        .end((err, res) => {
            assert.equal(res.status, 200);
            assert.exists(res.body, '_id');
            testThreadId = res.body._id;
        })
        done();
    })
    // Test02 - Viewing the 10 most recent threads with 3 replies each: GET request to /api/threads/{board}
    test("Test02 - Viewing the 10 most recent threads with 3 replies each: GET request to /api/threads/{board}", done => {
        chai.request(server)
        .get(`/api/threads/test-board`)
        .end((err, res) => {
            assert.equal(res.status, 200);
            assert.isArray(res.body)
            assert.isAtMost(res.body.length, 10)
            res.body.forEach(thread => {
                assert.isArray(thread.replies);
                assert.isAtMost(thread.replies.length, 3);
            });
        })
        done();
    })
    // Test03 - Deleting a thread with the incorrect password: DELETE request to /api/threads/{board} with an invalid delete_password
    test("Test03 - Deleting a thread with the incorrect password: DELETE request to /api/threads/{board} with an invalid delete_password", done => {
        chai.request(server)
        .delete(`/api/threads/test-board/${testThreadId}`)
        .send({
            delete_password: 'incorrect password',
            thread_id: testThreadId
        })
        .end((err, res) => {
            assert.equal(res.status, 200)
            assert.equal(res.text, 'incorrect password')
        })
        done();
    })
    // Test04 - Deleting a thread with the correct password: DELETE request to /api/threads/{board} with a valid delete_password
    test("Test04 - Deleting a thread with the correct password: DELETE request to /api/threads/{board} with a valid delete_password", done => {
        chai.request(server)
        .delete(`/api/threads/test-board/${testThreadId}`)
        .send({
            delete_password: 'delete_me',
        })
        .end((err, res) => {
            assert.equal(res.status, 200)
            assert.equal(res.text, 'success')
        })
        done();
    })
    // Test05 - Reporting a thread: PUT request to /api/threads/{board}
    test("Test05 - Reporting a thread: PUT request to /api/threads/{board}", done => {
        chai.request(server)
        .put(`/api/threads/test-board/${testThreadId}`)
        .end((err, res) => {
            assert.equal(res.status, 200)
            assert.equal(res.text, 'reported')
        })
        done();
    })
    // Test06 - Creating a new reply: POST request to /api/replies/{board}
    test("Test06 - Creating a new reply: POST request to /api/replies/{board}", done => {
        chai.request(server)
        .post(`/api/replies/test-board`)
        .send({
            thread_id: testThreadId, 
            text: 'Test 06 Reply',
            delete_password: 'delete_me'
        })
        .end((err, res) => {
            assert.equal(res.status, 200);
            assert.exists(res.body, '_id');
            testReplyId = res.body._id
        });
        done();
    })
    // Test07 - Viewing a single thread with all replies: GET request to /api/replies/{board}
    test("Test07 - Viewing a single thread with all replies: GET request to /api/replies/{board}", done => {
        chai.request(server)
        .get(`/api/replies/test-board`)
        .query({
            thread_id: testThreadId
        })
        .end((err, res) => {
            assert.equal(res.status, 200);
            //assert.exists(res.body, '_id');
            //assert.exists(res.body, 'delete_password');
            //assert.isArray(res.body.replies);
        });
        done();
    })
    // Test08 - Deleting a reply with the incorrect password: DELETE request to /api/replies/{board} with an invalid delete_password
    test("Test08 - Deleting a reply with the incorrect password: DELETE request to /api/replies/{board} with an invalid delete_password", done => {
        chai.request(server)
        .delete(`/api/replies/test-board`)
        .send({
            thread_id: testThreadId,
            reply_id: testReplyId,
            delete_password: 'incorrect password'
        })
        .end((err, res) => {
            assert.equal(res.status, 200);
            assert.equal(res.text, 'incorrect password')
        });
        done();
    })
    // Test09 - Deleting a reply with the correct password: DELETE request to /api/replies/{board} with a valid delete_password
    test("Test09 - Deleting a reply with the correct password: DELETE request to /api/replies/{board} with a valid delete_password", done => {
        chai.request(server)
        .delete(`/api/replies/test-board/${testThreadId}`)
        .send({
            delete_password: 'delete_me',
            thread_id: testThreadId,
            reply_id: testReplyId,
        })
        .end((err, res) => {
            assert.equal(res.status, 200);
            assert.equal(res.text, 'success')
        });
        done();
    })
    // Test10 - Reporting a reply: PUT request to /api/replies/{board}
    test("Test10 - Reporting a reply: PUT request to /api/replies/{board}", done => {
        chai.request(server)
        .put(`/api/replies/test-board/${testThreadId}`)
        .send({
            thread_id: testThreadId,
            reply_id: testReplyId
        })
        .end((err, res) => {
            assert.equal(res.status, 200);
            assert.equal(res.text, 'reported');
        });
        done();
    })
});
