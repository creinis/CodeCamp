'use strict';

const SudokuSolver = require('../controllers/sudoku-solver.js');

module.exports = function (app) {
  
  let solver = new SudokuSolver();

  app.route('/api/check')
    .post((req, res) => {
      try {
        const { puzzle, coordinate, value } = req.body;
        if (!puzzle || !coordinate || !value) {
          res.json({ error: 'Required field(s) missing' })
        }
        SudokuSolver.build(puzzle);
        const check = SudokuSolver.checkCoordinatePlacement(coordinate, value);
        res.json({...check});
      } catch (error) {
        res.json({ error: error.message });
      }
    });
    
  app.route('/api/solve')
    .post((req, res) => {
      try {
        const puzzleString = req.body.puzzle;
        if (!puzzleString) {
          res.json({ error: 'Required field(s) missing'});
        }
        SudokuSolver.build(puzzleString);
        const solution = SudokuSolver.solve()
        if (!solution) {
          res.json({ error: 'Puzzle cannot be solved' });
        }
        res.json({ solution });

      } catch (error) {
        return res.json({ error: error.message });
      }
    });
};
