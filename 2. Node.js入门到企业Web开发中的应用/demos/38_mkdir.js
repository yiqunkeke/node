/**
 * 创建文件夹
 * mkdir
 */
const fs = require('fs');

fs.mkdir('test', err => {
    if(err) throw err;
    console.log('Done');
});