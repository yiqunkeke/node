/**
 * rename 修改文件名称
 * 
 */

 const fs = require('fs');

 fs.rename('./text', 'test.txt', err =>{
     if(err) throw err;

     console.log('Done!');
     
 })