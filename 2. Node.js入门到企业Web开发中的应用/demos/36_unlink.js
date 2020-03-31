/**
 * 删除一个文件
 * unlink
 * 
 */

 const fs = require('fs');

 fs.unlink('./test.txt', err => {
     if(err) throw err;

     console.log('Unlink Done');
     
 })