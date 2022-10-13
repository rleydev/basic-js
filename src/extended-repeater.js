const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options) {
  let add = '';
  let result = '';
  let repeatTimes = options.repeatTimes || 1;
  let additionSeparator = options.additionSeparator || "|";
  let additionRepeatTimes = options.additionRepeatTimes || 1;
  let separator = options.separator || "+";
  let addition = options.addition === undefined ? "" : options.addition;

  for (let i = 0; i < repeatTimes; i++) {

    result += str;
    add = "";

    for (let j = 0; j < additionRepeatTimes; j++) {

      add += addition;

      if (j !== additionRepeatTimes - 1) {
        add += additionSeparator;
      }
    }
    result += add;

    if (i !== repeatTimes - 1) {
      result += separator;
    }
  }
  return result;
}

module.exports = {
  repeater
};
