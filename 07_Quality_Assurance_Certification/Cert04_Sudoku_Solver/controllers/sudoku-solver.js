class SudokuSolver {
  constructor() {
    this.puzzleString = null;
    this.board = [];
  }

  static validateCharacters(string) {
    const re = /[^1-9\.]/i;
    if (re.test(string)) {
      throw new Error("Invalid characters in puzzle");
    }
  }

  validatePuzzleString(puzzleString) {
    //checked
    SudokuSolver.validateCharacters(puzzleString);
    if (puzzleString.length != 81) {
      throw new Error("Expected puzzle to be 81 characters long");
    }
  }

  validateCoordinateAndValue(coordinate, value) {
    //checked
    const validCoordinate = /^[A-I][1-9]$/;
    const notValidValue = /[^1-9]/;
    if (!validCoordinate.test(coordinate)) {
      throw new Error("Invalid coordinate");
      //res.send({ error: "Invalid coordinate" });
    }
    if (notValidValue.test(value)) {
      throw new Error("Invalid value");
      //res.send({ error: "Invalid value" });
    }
  }

  checkRowPlacement(row, value) {
    //checked
    const r = this.board[row];
    for (let idx in r) {
      if (r[idx] === value.toString()) {
        return false;
      }
    }
    return true;
  }

  checkColPlacement(column, value) {
    //checked
    for (let i = 0; i < 9; i++) {
      if (this.board[i][column] === value.toString()) {
        return false;
      }
    }
    return true;
  }

  checkRegionPlacement(row, column, value) {
    //checked
    const regionRow = parseInt(row / 3) * 3;
    const regionColumn = parseInt(column / 3) * 3;
    for (let row = regionRow; row < regionRow + 3; row++) {
      for (let col = regionColumn; col < regionColumn + 3; col++) {
        if (this.board[row][col] === value.toString()) {
          return false;
        }
      }
    }
    return true;
  }

  checkCoordinatePlacement(coordinate, value) {
    //checked
    this.validateCoordinateAndValue(coordinate, value);
    let result = {
      valid: true,
      conflict: [],
    };
    let [row, col] = coordinate.split("");
    row = row.charCodeAt(0) - 65;
    col = Number(col) - 1;

    if (this.board[row][col] === value) {
      return result;
    }

    if (!this.checkRowPlacement(row, value)) {
      result.valid = false;
      result.conflict.push("row");
    }
    if (!this.checkColPlacement(col, value)) {
      result.valid = false;
      result.conflict.push("column");
    }
    if (!this.checkRegionPlacement(row, col, value)) {
      result.valid = false;
      result.conflict.push("region");
    }
    return result;
  }

  checkPlacement(row, col, value) {
    //checked
    if (
      this.checkRowPlacement(row, value) &&
      this.checkColPlacement(col, value) &&
      this.checkRegionPlacement(row, col, value)
    ) {
      return true;
    }
    return false;
  }

  getSolution() {
    //checked
    const solutionArray = this.board.flat(9);
    const solutionString = solutionArray.join("");
    return solutionString;
  }

  solve(row = 0, col = 0) {
    //checked
    if (col === 9) {
      col = 0;
      row++;
    }
    if (row === 9) {
      return this.getSolution();
    }
    if (this.board[row][col] != ".") {
      return this.solve(row, col + 1);
    }
    for (let i = 1; i < 10; i++) {
      let value = i.toString();
      if (this.checkPlacement(row, col, value)) {
        this.board[row][col] = value;
        const testSolve = this.solve(row, col + 1);
        if (testSolve != false) {
          return testSolve;
        } else {
          this.board[row][col] = ".";
        }
      }
    }
    return false;
  }

  build(puzzleString) {
    //checked
    this.validatePuzzleString(puzzleString);
    this.puzzleString = puzzleString;
    this.board = [];

    const puzzleArray = Array.from(this.puzzleString);
    for (let i = 0; i < 9; i++) {
      const characters = puzzleArray.splice(0, 9);
      this.board.push(characters);
    }
  }
}

module.exports = SudokuSolver;
