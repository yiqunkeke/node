/**
 *  拼接路径
 */
const {join} = require('path');

console.log(join('/usr', 'local', 'bin/'));
console.log(join('/usr','../local', 'bin/'));

// \usr\local\bin\
// \local\bin\    