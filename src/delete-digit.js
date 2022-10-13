const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  const number = n.toString()
  const result = []
  for (let i = 0; i < number.length; i++) {
    result.push(number.slice(0, i) + number.slice(i + 1))
  }

  return Math.max(...result.map(item => +item));
}

module.exports = {
  deleteDigit
};
