module.exports.test = 'A';

const modB = require('./05_modeB'); 
console.log("modA：", modB.test);

module.exports.test = "AA";
