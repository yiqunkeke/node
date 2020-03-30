/**
 * basename 文件名
 * extname  文件扩展名
 * dirname  所在文件夹名字
 */

 const {basename, dirname, extname} = require('path');

 const filePath = '/usr/local/bin/no.txt';

 console.log(basename(filePath));
 console.log(dirname(filePath));
 console.log(extname(filePath));