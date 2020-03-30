const path = require('path');

const mod = require('./02_cusmod');
console.log(mod.testVar);

console.log('__dirname', __dirname);
console.log('process.cwd()', process.cwd());
console.log('./', path.resolve('./'));

/**
 *  总结：
 * 
 *  path:
 *  __dirname、__filename总是返回文件的绝对路径
 *  process.cwd() 总是返回执行node命令所在文件夹
 *  
 *  ./
 *  在require方法中总是相对当前文件所在文件夹
 *  在其他地方和 process.cwd()一样，相对 node 启动文件夹
 */
