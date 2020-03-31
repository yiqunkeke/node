/**
 * watch 监视文件或文件夹
 * 这个是非常有用的，尤其是代码想做本地构建时，这个经常用到。
 */

 const fs = require('fs');

 fs.watch('./', {
     // 是否监视文件夹的子文件
     // 类似递归
     recursive: true
 }, (eventType, filename) => {
     console.log(eventType, filename); 
 })