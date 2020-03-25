/**
 *  require
 *      1. 如果有路径，就去路径里面找
 *      2. 没有的话，就去 node_modules里面找
 *      3. 再去 node 的安装目录里面找（安装的全局模块中）
 */

 // 引入模块
let mod = require("./mod");

// 1-2.使用变量
// console.log(mod.a);
// console.log(mod.b);
// console.log(mod.c);

// 3. 调用方法
// mod() 

// 4. class
var p = new mod("lijingke");
p.show();