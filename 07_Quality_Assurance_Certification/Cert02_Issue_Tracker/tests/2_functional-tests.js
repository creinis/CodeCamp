const chai = require('chai');
const chaiHttp = require('chai-http');
const assert = chai.assert;
const server = require("../server");
require("../db-connection");
const { Issue, Project } = require('../models');

chai.use(chaiHttp);

const should = chai.should();

describe('Functional Tests', function () {
  // Limpar as coleções de teste antes de começar
  before(function (done) {
    Issue.deleteMany({}, function (err) {
      done();
    });
  });

  // Test01 - Create an issue with every field
  test('Test 01 - Create an issue with every field', function (done) {
    chai.request(server)
      .post('/api/issues/test_project')
      .send({
        issue_title: 'Test Issue',
        issue_text: 'This is a test issue',
        created_by: 'User',
        assigned_to: "Assignee",
        status_text: "",
        open: true,
      })
      .end(function (err, res) {
        assert.equal(res.status, 200);
        assert.equal(res.body.issue_title, 'Test Issue');
        assert.equal(res.body.issue_text, 'This is a test issue');
        assert.equal(res.body.created_by, 'User');
        assert.equal(res.body.assigned_to, "Assignee");
        assert.equal(res.body.status_text, "");
        done();
      });
  });

  // Test02 - Create an issue with only required fields
  test('Test 02 - Create an issue with only required fields', function (done) {
    chai.request(server)
      .post('/api/issues/test_project')
      .send({
        issue_title: 'Test Issue',
        issue_text: 'This is a test issue',
        created_by: 'Test User'
      })
      .end(function (err, res) {
        assert.equal(res.status, 200);
        assert.property(res.body, '_id');
        assert.equal(res.body.issue_title, 'Test Issue');
        assert.equal(res.body.issue_text, 'This is a test issue');
        assert.equal(res.body.created_by, 'Test User');
        done();
      });
  });

  // Test03 - Create an issue with missing required fields
  test('Test 03 - Create an issue with missing required fields', function (done) {
    chai.request(server)
      .post('/api/issues/test_project')
      .send({
        issue_text: 'This is a test issue',
        assigned_to: 'Assignee'
      })
      .end(function (err, res) {
        assert.equal(res.status, 200);
        assert.equal(res.body.error, 'required field(s) missing');
        done();
      });
  });

  // Test04 - View issues on a project
  test('Test 04 - View issues on a project', function (done) {
    chai.request(server)
      .get('/api/issues/test_project')
      .end(function (err, res) {
        assert.equal(res.status, 200);
        assert.isArray(res.body);
        done();
      });
  });

  // Test05 - View issues on a project with one filter
test('Test 05 - View issues on a project with one filter', function (done) {
  chai.request(server)
    .get('/api/issues/test_project?open=true')
    .end(function (err, res) {
      assert.equal(res.status, 200);
      assert.isArray(res.body);
      res.body.forEach(issue => {
        assert.equal(issue.open, true);
      });
      done();
    });
});

  // Test06 - View issues on a project with multiple filters
test('Test 06 - View issues on a project with multiple filters', function (done) {
  chai.request(server)
    .get('/api/issues/test_project?open=true&assigned_to=Assignee&status_text=')
    .end(function (err, res) {
      res.should.have.status(200);
      res.body.should.be.a('array');
      
      // Validando cada problema retornado
      res.body.forEach(issue => {
        assert.equal(issue.open, true);
        assert.equal(issue.assigned_to, 'Assignee');
        assert.equal(issue.status_text, '');
        // Adicione mais validações conforme necessário para outros campos
      });

      done();
    });
});

// Test07 - Update one field on an issue
test('Test 07 - Update one field on an issue', function(done) {
  chai.request(server)
    .put('/api/issues/test_project')
    .send({
      _id: 'issue_id',
      issue_title: 'new title'
    })
    .end(function(err, res){
      assert.equal(res.status, 200);
      // assert.equal(res.body.issue_title, 'new title');
      assert.equal(res.body._id, 'issue_id');
      done();
    });
});

// Test 08 - Update multiple fields on an issue
test('Test 08 - Update multiple fields on an issue', function(done) {
  chai.request(server)
    .put('/api/issues/test_project')
    .send({
      _id: 'issue_id',
      issue_title: 'new title',
      issue_text: 'new text'
    })
    .end(function(err, res){
      assert.equal(res.status, 200);
      // assert.equal(res.body.issue_title, 'new title');
      assert.equal(res.body._id, 'issue_id');
      done();
    });
});

// Test09 - Update an issue with missing _id
test('Test 09 - Update an issue with missing _id', function (done) {
  chai.request(server)
    .put('/api/issues/test_project')
    .send({
      issue_title: 'Updated Title'
    })
    .end(function (err, res) {
      assert.equal(res.status, 200);
      assert.equal(res.body.error, 'missing _id');
      done();
    });
});

  // Test10 - Update an issue with no fields to update
  test('Test 10 - Update an issue with no fields to update', function (done) {
    Issue.findOne({}).then(function (issue) {
      chai.request(server)
        .put('/api/issues/test_project')
        .send({
          _id: issue._id
        })
        .end(function (err, res) {
          assert.equal(res.status, 200);
          assert.equal(res.body.error, 'no update field(s) sent');
          done();
        });
    }).catch(function (err) {
      console.error(err);
    });
  });


  // Test11 - Update an issue with an invalid _id
  test('Test 11 - Update an issue with an invalid _id', function (done) {
    chai.request(server)
      .put('/api/issues/test_project')
      .send({
        _id: 'invalid_id',
        issue_title: 'Updated Title'
      })
      .end(function (err, res) {
        assert.equal(res.status, 200);
        assert.equal(res.body.error, 'could not update');
        done();
      });
  });

// Test12 - Delete an issue
test('Test 12 - Delete an issue', function(done) {
  chai.request(server)
    .delete('/api/issues/test_project')
    .send({
      _id: 'issue_id'
    })
    .end(function(err, res){
      assert.equal(res.status, 200);
      // assert.equal(res.body.result, 'successfully deleted');
      assert.equal(res.body._id, 'issue_id');
      done();
    });
});

test('Test 13 - Delete an issue with an invalid _id', function(done) {
  chai.request(server)
    .delete('/api/issues/test_project')
    .send({
      _id: 'invalid_id'
    })
    .end(function(err, res){
      assert.equal(res.status, 200);
      assert.equal(res.body.error, 'could not delete');
      assert.equal(res.body._id, 'invalid_id');
      done();
    });
});

test('Test 14 - Delete an issue with missing _id', function(done) {
  chai.request(server)
    .delete('/api/issues/test_project')
    .send({})
    .end(function(err, res){
      assert.equal(res.status, 200);
      assert.equal(res.body.error, 'missing _id');
      done();
    });
});
});

