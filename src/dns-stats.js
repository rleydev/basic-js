const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {
  const dnsStats = {};

  for (i in domains) {
    domains[i] = domains[i].split('\.');
    for (let k = domains[i].length - 1; k >= 0; k--) {
      let dom = '.' + domains[i].slice(k).reverse().join('.');
      dnsStats[dom] = !dnsStats[dom] ? 1 : dnsStats[dom] + 1;
    }
  }

  return dnsStats;
}

module.exports = {
  getDNSStats
};
