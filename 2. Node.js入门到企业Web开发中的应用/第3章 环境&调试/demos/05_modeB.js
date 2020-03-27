module.exports.test = 'B';

const modA = require('./05_modeA');
console.log("modB：", modA.test);

module.exports.test = "BB";