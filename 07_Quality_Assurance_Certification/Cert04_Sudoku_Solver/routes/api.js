'use strict';

const SudokuSolver = require('../controllers/sudoku-solver.js');

module.exports = function (app) {
  
  let solver = new SudokuSolver();

  app.route('/api/check')
    .post((req, res) => {
      const puzzle = req.body.puzzle;
      if (!puzzle) {
        return res.json({ error: 'Required field missing' });
      }
      const solution = solver.solve(puzzle);
      if(solution.error) {
        return res.json(solution);
      }
      return res.json({ solution });
    });
    
  app.route('/api/solve')
    .post((req, res) => {

    });
};
