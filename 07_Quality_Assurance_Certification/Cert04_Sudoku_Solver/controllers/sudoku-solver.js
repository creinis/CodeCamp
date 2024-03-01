class SudokuSolver {
  constructor() {
    this.puzzleString = null;
    this.board = [];
  }
  
  static validateCharacters(string) {
    const re = /[^1-9\.]/i;
    if (re.test(string)) {
      return res.send({ error: 'Invalid characters in puzzle' });
    }
  }

  validatePuzzleString(puzzleString) {
    SudokuSolver.validateCharacters(puzzleString);
    if (puzzleString.length != 81) {
      res.send({ error: 'Expected puzzle to be 81 characters long' });
    }
  }

  validadeCoordinateAndValue(coordinate, value) {
    const validateCoordinate = /^[A-I][1-9]$/;
    const notValidNum = /[^1-9]/;
    if (validateCoordinate.test(coordinate)) {
      res.send({ error: 'Invalid coordinate'});
    }
    if (notValidNum.test(value)) {
      res.json({ error: 'Invalid value'});
    }
  }

  checkRowPlacement(row, value) {
    const r = this.board[row];
    for (let idx in r) {
      if (r[idx] == value) {
        return false;
      }
    }
    return true;
  }

  checkColPlacement(column, value) {
    for (let i = 0; i < 9; i++) {
      if(this.board[i][column] == value) {
        return false;
      }
    }
    return true;
  }

  checkRegionPlacement(row, column, value) {
    const regionRow = parseInt(row/3)*3;
    const regionColumn = parseInt(column/3)*3;
    for (let row = regionRow; row < regionRow + 3; row++) {
      for (let col = regionColumn; col < regionColumn + 3; col++) {
        if (this.board[row][col] == value) {
          return false;
        }
      }
    }
    return true;
  }

  checkCoordinatePlacement(coordinate, value) {
    this.validadeCoordinateAndValue(coordinate, value);
    let result = {
      valid: true,
      conflict: [],
    }
    let [row, col] = coordinate.split('');
    row = row.charCodeAt(0) - 65;
    col = Number(col) - 1;
    if (!this.checkRowPlacement(row, value)) {
      result.valid = false;
      result.conflict.push('row')
    }
    if (!this.checkColPlacement(row, value)) {
      result.valid = false;
      result.conflict.push('column')
    }
    if (!this.checkRegionPlacement(row, value)) {
      result.valid = false;
      result.conflict.push('region')
    }
    if (result.valid) {
      delete result.conflict;
    }
    return result;
  }

  checkPlacement(row, col, value) {
    if (
        this.checkRowPlacement(row, value) 
        && this.checkColPlacement(col, value) 
        && this.checkRegionPlacement(row, col, value)
        ) {
      return true;
    }
    return false;
  }

  getSolution() {
    const solArr = this.board.flat(9)
    const solStr = solArr.join('')
    return solStr
  }

  solve(row = 0, col = 0) {
    if ( col === 9 ) {
      col = 0;
      row++;
    }
    if ( row === 9 ) {
      return this.getSolution();
    }
    if (this.board[row][col] != '.') {
      return this.solve(row, col + 1);
    }
    for (let i = 1; i < 10; i++) {
      let value = i.toString();
      if (this.checkPlacement(row, col, value)) {
        this.board[row][col] = value;
        const testSolve = this.solve(row, col + 1);
        if ( testSolve != false ) {
          return testSolve;
        } else {
          this.board[row][col] = '.';
        }
      }
    }
    return false;
  }

  build(puzzleString) {
    this.validatePuzzleString(puzzleString)
    this.puzzleString = puzzleString
    this.board = []

    const puzzleArray = Array.from(this.puzzleString)
    for (let i = 0; i < 9; i++) {
      const characters = puzzleArray.slice(0,9)
      this.board.push(characters)
    }
  }
}

module.exports = SudokuSolver;
