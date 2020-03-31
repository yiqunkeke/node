/**
 * 删除文件夹
 * rmdir
 * 
 */

 const fs = require('fs');

 fs.rmdir('./test',err => {
     if(err) throw err;
     console.log('Done');
 });