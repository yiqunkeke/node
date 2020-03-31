/**
 * 文件夹相关操作
 * readdir 读取文件夹
 */

 const fs = require('fs');

 fs.readdir('../', (err, files) => {
     if(err) throw err;
     console.log(files);
     console.log(process.cwd());
     
 })

 /**
  *  ./ 表示当前文件所在目录
  *  ../ 表示当前文件所在目录的上一层
  */

  /**
   * process.cwd()
   * __dirname
   */