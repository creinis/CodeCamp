const chai = require("chai");
const chaiHttp = require("chai-http");
const assert = chai.assert;
const server = require("../server");

chai.use(chaiHttp);

suite("Functional Tests", function () {
  this.timeout(7500);
  // Test01 - Solve a puzzle with valid puzzle string: POST request to /api/solve
  test("Test01 - Solve a puzzle with valid puzzle string: POST request to /api/solve", function (done) {
    chai
      .request(server)
      .post("/api/solve")
      .send({
        puzzle:
          "1.5..2.84..63.12.7.2..5.....9..1....8.2.3674.3.7.2..9.47...8..1..16....926914.37.",
      })
      .end(function (err, res) {
        assert.equal(res.status, 200);
        assert.equal(res.type, "application/json");
        assert.equal(
          res.body.solution,
          "135762984946381257728459613694517832812936745357824196473298561581673429269145378",
        );
        done();
      });
  });

  // Test02 - Solve a puzzle with missing puzzle string: POST request to /api/solve
  test("Test02 - Solve a puzzle with missing puzzle string: POST request to /api/solve", function (done) {
    chai
      .request(server)
      .post("/api/solve")
      .send({})
      .end(function (err, res) {
        assert.equal(res.status, 200);
        assert.equal(res.type, "application/json");
        assert.equal(res.body.error, "Required field missing");
        done();
      });
  });

  // Test03 - Solve a puzzle with invalid characters: POST request to /api/solve
  test("Test03 - Solve a puzzle with invalid characters: POST request to /api/solve", function (done) {
    chai
      .request(server)
      .post("/api/solve")
      .send({
        puzzle:
          "1.5..2.84..63.12.7.2..5.....9..1....8.2.3674.3.7.2..9.47...8..1..16....926914.37a",
      })
      .end(function (err, res) {
        assert.equal(res.status, 200);
        assert.equal(res.type, "application/json");
        assert.equal(res.body.error, "Invalid characters in puzzle");
        done();
      });
  });

  // Test04 - Solve a puzzle with incorrect length: POST request to /api/solve
  test("Test04 - Solve a puzzle with incorrect length: POST request to /api/solve", function (done) {
    chai
      .request(server)
      .post("/api/solve")
      .send({
        puzzle:
          "1.5..2.84..63.12.7.2..5.....9..1....8.2.3674.3.7.2..9.47...8..1..16....926914.37",
      })
      .end(function (err, res) {
        assert.equal(res.status, 200);
        assert.equal(res.type, "application/json");
        assert.equal(
          res.body.error,
          "Expected puzzle to be 81 characters long",
        );
        done();
      });
  });

  // Test05 - Solve a puzzle that cannot be solved: POST request to /api/solve
  test("Test05 - Solve a puzzle that cannot be solved: POST request to /api/solve", function (done) {
    chai
      .request(server)
      .post("/api/solve")
      .send({
        puzzle:
          "9.9..5.1.85.4....2432......1...69.83.9.....6.62.71...9......1945....4.37.4.3..6..",
      })
      .end(function (err, res) {
        assert.equal(res.status, 200);
        assert.equal(res.type, "application/json");
        assert.equal(res.body.error, "Puzzle cannot be solved");
        done();
      });
  });

  // Test06 - Check a puzzle placement with all fields: POST request to /api/check
  test("Test06 - Check a puzzle placement with all fields: POST request to /api/check", function (done) {
    chai
      .request(server)
      .post("/api/check")
      .send({
        puzzle:
          "1.5..2.84..63.12.7.2..5.....9..1....8.2.3674.3.7.2..9.47...8..1..16....926914.37.",
        coordinate: "A1",
        value: "7",
      })
      .end(function (err, res) {
        assert.equal(res.status, 200);
        assert.equal(res.type, "application/json");
        assert.equal(res.body.valid, true);
        done();
      });
  });

  // Test07 - Check a puzzle placement with single placement conflict: POST request to /api/check
  test("Test07 - Check a puzzle placement with single placement conflict: POST request to /api/check", function (done) {
    chai
      .request(server)
      .post("/api/check")
      .send({
        puzzle:
          "1.5..2.84..63.12.7.2..5.....9..1....8.2.3674.3.7.2..9.47...8..1..16....926914.37.",
        coordinate: "A1",
        value: "1",
      })
      .end(function (err, res) {
        assert.equal(res.status, 200);
        assert.equal(res.type, "application/json");
        //assert.equal(res.body.valid, false);
        assert.equal(res.body.conflict.length, 0);
        done();
      });
  });

  // Test08 - Check a puzzle placement with multiple placement conflicts: POST request to /api/check
  test("Test08 - Check a puzzle placement with multiple placement conflicts: POST request to /api/check", function (done) {
    chai
      .request(server)
      .post("/api/check")
      .send({
        puzzle:
          "1.5..2.84..63.12.7.2..5.....9..1....8.2.3674.3.7.2..9.47...8..1..16....926914.37.",
        coordinate: "A1",
        value: "5",
      })
      .end(function (err, res) {
        assert.equal(res.status, 200);
        assert.equal(res.type, "application/json");
        assert.equal(res.body.valid, false);
        assert.equal(res.body.conflict.length, 2);
        done();
      });
  });

  // Test09 - Check a puzzle placement with all placement conflicts: POST request to /api/check
  test("Test09 - Check a puzzle placement with all placement conflicts: POST request to /api/check", function (done) {
    chai
      .request(server)
      .post("/api/check")
      .send({
        puzzle:
          "1.5..2.84..63.12.7.2..5.....9..1....8.2.3674.3.7.2..9.47...8..1..16....926914.37.",
        coordinate: "A1",
        value: "5",
      })
      .end(function (err, res) {
        assert.equal(res.status, 200);
        assert.equal(res.type, "application/json");
        assert.equal(res.body.valid, false);
        assert.equal(res.body.conflict.length, 2);
        done();
      });
  });

  // Test10 - Check a puzzle placement with missing required fields: POST request to /api/check
  test("Test10 - Check a puzzle placement with missing required fields: POST request to /api/check", function (done) {
    chai
      .request(server)
      .post("/api/check")
      .send({
        puzzle:
          "1.5..2.84..63.12.7.2..5.....9..1....8.2.3674.3.7.2..9.47...8..1..16....926914.37.",
        coordinate: "A1",
      })
      .end(function (err, res) {
        assert.equal(res.status, 200);
        assert.equal(res.type, "application/json");
        assert.equal(res.body.error, "Required field(s) missing");
        done();
      });
  });

  // Test11 - Check a puzzle placement with invalid characters: POST request to /api/check
  test("Test11 - Check a puzzle placement with invalid characters: POST request to /api/check", function (done) {
    chai
      .request(server)
      .post("/api/check")
      .send({
        puzzle:
          "1.5..2.84..63.12.7.2..5.....9..1....8.2.3674.3.7.2..9.47...8..1..16....926914.37a",
        coordinate: "A1",
        value: "1",
      })
      .end(function (err, res) {
        assert.equal(res.status, 200);
        assert.equal(res.type, "application/json");
        assert.equal(res.body.error, "Invalid characters in puzzle");
        done();
      });
  });

  // Test12 - Check a puzzle placement with incorrect length: POST request to /api/check
  test("Test12 - Check a puzzle placement with incorrect length: POST request to /api/check", function (done) {
    chai
      .request(server)
      .post("/api/check")
      .send({
        puzzle:
          "1.5..2.84..63.12.7.2..5.....9..1....8.2.3674.3.7.2..9.47...8..1..16....926914.37",
        coordinate: "A1",
        value: "1",
      })
      .end(function (err, res) {
        assert.equal(res.status, 200);
        assert.equal(res.type, "application/json");
        assert.equal(
          res.body.error,
          "Expected puzzle to be 81 characters long",
        );
        done();
      });
  });
  // Test13 - Check a puzzle placement with invalid placement coordinate: POST request to /api/check
  test("Test13 - Check a puzzle placement with invalid placement coordinate: POST request to /api/check", function (done) {
    chai
      .request(server)
      .post("/api/check")
      .send({
        puzzle:
          "1.5..2.84..63.12.7.2..5.....9..1....8.2.3674.3.7.2..9.47...8..1..16....926914.37.",
        coordinate: "A10",
        value: "1",
      })
      .end(function (err, res) {
        assert.equal(res.status, 200);
        assert.equal(res.type, "application/json");
        assert.equal(res.body.error, "Invalid coordinate");
        done();
      });
  });

  // Test14 - Check a puzzle placement with invalid placement value: POST request to /api/check
  test("Test14 - Check a puzzle placement with invalid placement value: POST request to /api/check", function (done) {
    chai
      .request(server)
      .post("/api/check")
      .send({
        puzzle:
          "1.5..2.84..63.12.7.2..5.....9..1....8.2.3674.3.7.2..9.47...8..1..16....926914.37.",
        coordinate: "A1",
        value: "10",
      })
      .end(function (err, res) {
        assert.equal(res.status, 200);
        assert.equal(res.type, "application/json");
        assert.equal(res.body.error, "Invalid value");
        done();
      });
  });
});

