const { NotImplementedError } = require('../extensions/index.js');

/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */
function minesweeper(matrix) {
  let result = JSON.parse(JSON.stringify(matrix));
  for (let i = 0; i < matrix.length; i++) {
    for (let n = 0; n < matrix[0].length; n++) {
      let sum = 0;
      for (let j = -1; j <= 1; j++) {
        for (let k = -1; k <=1; k++) {
          if (j === 0 && k === 0) continue;
          if (matrix[i + j] && matrix[i + j][n + k] && matrix[i + j][n + k] === true) {
            sum++;
          }
        }
      }
      result[i][n] = sum;
    }
  }
  return result
}

module.exports = {
  minesweeper
};
