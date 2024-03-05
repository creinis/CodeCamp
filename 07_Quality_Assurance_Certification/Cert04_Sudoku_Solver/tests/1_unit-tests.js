const chai = require("chai");
const assert = chai.assert;

const { puzzlesAndSolutions } = require("../controllers/puzzle-strings.js");
const Solver = require("../controllers/sudoku-solver.js");
let solver = new Solver();

suite("Unit Tests", () => {
  // Test01 - Logic handles a valid puzzle string of 81 characters
  test("Test01 - Logic handles a valid puzzle string of 81 characters", function (done) {
    let puzzleString = puzzlesAndSolutions[0][0];
    let errorMessage = null;
    try {
      solver.build(puzzleString);
    } catch (error) {
      errMsg = error.message;
    }
    assert.isNull(errorMessage, "Error: " + errorMessage);
    done();
  });

  // Test02 - Logic handles a puzzle string with invalid characters (not 1-9 or .)
  test("Test02 - Logic handles a puzzle string with invalid characters (not 1-9 or .)", function (done) {
    let puzzleString = puzzlesAndSolutions[0][0].replace(".", "a");
    let errorMessage = null;
    try {
      solver.build(puzzleString);
    } catch (error) {
      errorMessage = error.message;
    }
    assert.isNotNull(errorMessage, "Error: " + errorMessage);
    done();
  });

  // Test03 - Logic handles a puzzle string that is not 81 characters in length
  test("Test03 - Logic handles a puzzle string that is not 81 characters in length", function (done) {
    let puzzleString = puzzlesAndSolutions[0][0].slice(0, 80);
    let errorMessage = null;
    try {
      solver.build(puzzleString);
    } catch (error) {
      errorMessage = error.message;
    }
    assert.isNotNull(errorMessage, "Error: " + errorMessage);
    done();
  });

  // Test04 - Logic handles a valid row placement
  test("Test04 - Logic handles a valid row placement", function (done) {
    let puzzleString = puzzlesAndSolutions[0][0];
    solver.build(puzzleString);
    let placement = solver.checkRowPlacement(0, 3);
    assert.isTrue(placement);
    done();
  });

  // Test05 - Logic handles an invalid row placement
  test("Test05 - Logic handles an invalid row placement", function (done) {
    let puzzleString = puzzlesAndSolutions[0][0];
    solver.build(puzzleString);
    let placement = solver.checkRowPlacement(0, 5);
    assert.isFalse(placement);
    done();
  });

  // Test06 - Logic handles a valid column placement
  test("Test06 - Logic handles a valid column placement", function (done) {
    let puzzleString = puzzlesAndSolutions[0][0];
    solver.build(puzzleString);
    let placement = solver.checkColPlacement(0, 0, 9);
    assert.isTrue(placement);
    done();
  });

  // Test07 - Logic handles an invalid column placement
  test("Test07 - Logic handles an invalid column placement", function (done) {
    let puzzleString = puzzlesAndSolutions[0][0];
    solver.build(puzzleString);
    let placement = solver.checkColPlacement(0, 1);
    assert.isFalse(placement);
    done();
  });

  // Test08 - Logic handles a valid region (3x3 grid) placement
  test("Test08 - Logic handles a valid region (3x3 grid) placement", function (done) {
    let puzzleString = puzzlesAndSolutions[0][0];
    solver.build(puzzleString);
    let placement = solver.checkRegionPlacement(0, 0, 9);
    assert.isTrue(placement);
    done();
  });

  // Test09 - Logic handles an invalid region (3x3 grid) placement
  test("Test09 - Logic handles an invalid region (3x3 grid) placement", function (done) {
    let puzzleString = puzzlesAndSolutions[0][0];
    solver.build(puzzleString);
    let placement = solver.checkRegionPlacement(0, 0, 5);
    assert.isFalse(placement);
    done();
  });

  // Test10 - Valid puzzle strings pass the solver
  test("Test10 - Valid puzzle strings pass the solver", function (done) {
    let puzzleString = puzzlesAndSolutions[0][0];
    let solutionString = puzzlesAndSolutions[0][1];
    let errorMessage = null;
    let solution;
    try {
      solver.build(puzzleString);
      solution = solver.solve();
      if (!solution) {
        throw new Error("Puzzle cannot be solved");
      }
    } catch (error) {
      errorMessge = error.message;
    }
    assert.equal(solutionString, solution);
    assert.isNull(errorMessage, "Error: " + errorMessage);
    done();
  });

  // Test11 - Invalid puzzle strings fail the solver
  test("Test11 - Invalid puzzle strings fail the solver", function (done) {
    let puzzleString = puzzlesAndSolutions[0][0].replace(".", "a");
    let errorMessage = null;
    let solution;
    try {
      solver.build(puzzleString);
      solution = solver.solve();
      if (!solution) {
        throw new Error("Puzzle cannot be solved");
      }
    } catch (error) {
      errorMessage = error.message;
    }
    assert.isNotNull(errorMessage);
    done();
  });

  // Test12 - Solver returns the expected solution for an incomplete puzzle
  test("Test12 - Solver returns the expected solution for an incomplete puzzle", function (done) {
    let puzzleString = puzzlesAndSolutions[0][0];
    let solutionString = puzzlesAndSolutions[0][1];
    let errorMessage = null;
    let solution;
    try {
      solver.build(puzzleString);
      solution = solver.solve();
      if (!solution) {
        throw new Error("Puzzle cannot be solved");
      }
    } catch (error) {
      errorMessage = error.message;
    }
    assert.equal(solutionString, solution);
    assert.isNull(errorMessage);
    done();
  });
});

