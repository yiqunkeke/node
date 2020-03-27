/** 引用系统模块（NodeJS内置模块）
 *  直接使用模块名，无需安装
 * 
 */
const fs= require('fs');

// 读文件是异步操作，使用回调方式获取数据
const result = fs.readFile('./06_fs.js', (err, data) => {
    if(err) {
        console.log(err);
    } else {
        console.log(data.toString());
    } 
})

console.log(result);