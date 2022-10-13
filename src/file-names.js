const { NotImplementedError } = require('../extensions/index.js');

/**
 * There's a list of file, since two files cannot have equal names,
 * the one which comes later will have a suffix (number),
 * where number is the smallest integer such that the found name is not used yet.
 *
 * Return an array of names that will be given to the files.
 *
 * @param {Array} names
 * @return {Array}
 *
 * @example
 * For input ["file", "file", "image", "file(1)", "file"],
 * the output should be ["file", "file(1)", "image", "file(1)(1)", "file(2)"]
 *
 */
function renameFiles(names) {

  let resultArray = [];

  for (let element of names) {
    if (resultArray.indexOf(element) !== -1){
      let number = 1;
      while (resultArray.indexOf(`${element}(${number})`) !== -1){
          number += 1;
      }
      resultArray.push(`${element}(${number})`);
    } else{
      resultArray.push(element);
      
    }
  }
  return resultArray;
}

module.exports = {
  renameFiles
};
