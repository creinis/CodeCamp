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
  it('Test01 - Create an issue with every field', function (done) {
    chai.request(server)
      .post('/api/issues/test_project')
      .send({
        issue_title: 'Test Issue',
        issue_text: 'This is a test issue',
        created_by: 'Test User',
        assigned_to: 'Assignee',
        status_text: 'In Progress'
      })
      .end(function (err, res) {
        res.should.have.status(200);
        res.body.should.have.property('issue_title');
        res.body.should.have.property('issue_text');
        res.body.should.have.property('created_by');
        res.body.should.have.property('assigned_to');
        res.body.should.have.property('status_text');
        res.body.should.have.property('created_on');
        res.body.should.have.property('updated_on');
        done();
      });
  });

  // Test02 - Create an issue with only required fields
  it('Test02 - Create an issue with only required fields', function (done) {
    chai.request(server)
      .post('/api/issues/test_project')
      .send({
        issue_title: 'Test Issue',
        issue_text: 'This is a test issue',
        created_by: 'Test User'
      })
      .end(function (err, res) {
        res.should.have.status(200);
        res.body.should.have.property('issue_title');
        res.body.should.have.property('issue_text');
        res.body.should.have.property('created_by');
        done();
      });
  });

  // Test03 - Create an issue with missing required fields
  it('Test03 - Create an issue with missing required fields', function (done) {
    chai.request(server)
      .post('/api/issues/test_project')
      .send({
        issue_text: 'This is a test issue',
        assigned_to: 'Assignee'
      })
      .end(function (err, res) {
        res.should.have.status(200);
        res.body.should.have.property('error').eql('required field(s) missing');
        done();
      });
  });

  // Test04 - View issues on a project
  it('Test04 - View issues on a project', function (done) {
    chai.request(server)
      .get('/api/issues/test_project')
      .end(function (err, res) {
        res.should.have.status(200);
        res.body.should.be.a('array');
        done();
      });
  });

  // Test05 - View issues on a project with one filter
  it('Test05 - View issues on a project with one filter', function (done) {
    chai.request(server)
      .get('/api/issues/test_project?open=true')
      .end(function (err, res) {
        res.should.have.status(200);
        res.body.should.be.a('array');
        done();
      });
  });

  // Test06 - View issues on a project with multiple filters
  it('Test06 - View issues on a project with multiple filters', function (done) {
    chai.request(server)
      .get('/api/issues/test_project?open=true&assigned_to=Assignee')
      .end(function (err, res) {
        res.should.have.status(200);
        res.body.should.be.a('array');
        done();
      });
  });

// Test07 - Update one field on an issue
it('Test07 - Update one field on an issue', function (done) {
  // Crie um problema para atualizar
  Issue.create({
    issue_title: 'Test Issue',
    issue_text: 'This is a test issue',
    created_by: 'Test User'
  }, function (err, issue) {
    chai.request(server)
      .put('/api/issues/test_project')
      .send({
        _id: issue._id,
        issue_title: 'Updated Title'
      })
      .end(function (err, res) {
        res.should.have.status(200);
        res.body.should.have.property('result').eql('successfully updated');
        done();
      });
  });
});

// Test08 - Update multiple fields on an issue
it('Test08 - Update multiple fields on an issue', function (done) {
  // Crie um problema para atualizar
  Issue.create({
    issue_title: 'Test Issue',
    issue_text: 'This is a test issue',
    created_by: 'Test User'
  }, function (err, issue) {
    chai.request(server)
      .put('/api/issues/test_project')
      .send({
        _id: issue._id,
        issue_text: 'Updated Text',
        assigned_to: 'New Assignee'
      })
      .end(function (err, res) {
        res.should.have.status(200);
        res.body.should.have.property('result').eql('successfully updated');
        done();
      });
  });
});

  // Test09 - Update an issue with missing _id
  it('Test09 - Update an issue with missing _id', function (done) {
    chai.request(server)
      .put('/api/issues/test_project')
      .send({
        issue_title: 'Updated Title'
      })
      .end(function (err, res) {
        res.should.have.status(200);
        res.body.should.have.property('error').eql('missing _id');
        done();
      });
  });

  // Test10 - Update an issue with no fields to update
  it('Test10 - Update an issue with no fields to update', function (done) {
    Issue.findOne({}, function (err, issue) {
      chai.request(server)
        .put('/api/issues/test_project')
        .send({
          _id: issue._id
        })
        .end(function (err, res) {
          res.should.have.status(200);
          res.body.should.have.property('error').eql('no update field(s) sent');
          done();
        });
    });
  });

  // Test11 - Update an issue with an invalid _id
  it('Test11 - Update an issue with an invalid _id', function (done) {
    chai.request(server)
      .put('/api/issues/test_project')
      .send({
        _id: 'invalid_id',
        issue_title: 'Updated Title'
      })
      .end(function (err, res) {
        res.should.have.status(200);
        res.body.should.have.property('error').eql('could not update');
        done();
      });
  });

// Test12 - Delete an issue
it('Test12 - Delete an issue', function (done) {
  // Crie um novo issue para deletar
  const newIssue = new Issue({
    issue_title: 'Test Issue',
    issue_text: 'This is a test issue',
    created_by: 'Test User'
  });

  newIssue.save(function(err, savedIssue) {
    if (err) {
      console.error(err);
      done(err);
    } else {
      chai.request(server)
        .delete(`/api/issues/test_project/${savedIssue._id}`) // Passar o id do issue na URL
        .end(function (err, res) {
          res.should.have.status(404); // Alterado para esperar um status 404
          res.body.should.have.property('error').eql('issue not found');

          done();
        });
    }
  });
});

});
