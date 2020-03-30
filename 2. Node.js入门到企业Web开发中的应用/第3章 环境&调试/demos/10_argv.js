/**
 *  argv 
 *  argv0
 *  execArgv
 *  execPath
 */

/**
 * 在NodeJS启动的时候，可以查看NodeJS 启动脚本相关的参数
 * 我们通常通过启动脚本传递一些参数到程序中，那么我们可以通过argv来获取这些参数
 * 
 */

 const {argv, argv0, execArgv, execPath} = process;

 argv.forEach(item => {
     console.log(item);
     // 默认情况下包含两个固定的：
     // 一个是 node.exe
     // 一个是当前执行文件的路径
 })

 console.log(execArgv);

 console.log(execPath); // 脚本路径