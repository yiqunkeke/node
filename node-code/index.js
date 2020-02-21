/**
 *  系统模块：只需require()引入，无需下载
 *  比如 path --- 就是系统模块---（用于处理文件路径和目录路径的实用工具）
 *   
 *      path.dirname--获取文件路径
 *      path.basename--获取文件名
 *      path.extname---获取文件扩展名
 *   
 *      path.resolve()方法---用于解析路径:
 *      比如：把__dirname 和当前文件名字，拼起来-----获得当前文件的绝对路径
 *   
 *   再比如 fs ----也是系统模块---（用于文件读写操作）
 */

let path = require("path");

    console.log(path.dirname("/node/a/b/c/1.jpg")) // 获取文件路径
    // 返回 '/node/a/b/c'

    console.log(path.basename("/node/a/b/c/1.jpg")) // 获取文件名字
    // 返回 '1.jpg'

    console.log(path.extname("/node/a/b/c/1.jpg")) // 获取文件后缀名
    // 返回 '.jpg'

    console.log(path.resolve("/node/a/b/c/1.jpg","../../", "d"));
    // 返回 C:\node\a\b\d

    console.log(path.resolve(__dirname, "index.js"));
    // 返回 C:\Users\14318\Desktop\node\index.js
    

let fs = require("fs");
    // 读文件
    fs.readFile("./a.text", (err, data) => {
        if(err) {
            console.log(err);
        } else {
            console.log(data); // <Buffer 61 62 63>
            console.log(data.toString()); // abc
        }
    })

    // 写文件
    fs.writeFile("b.text", "dddddd", (err) => {
        if(err) {
            throw err
        }
    })

    // 同步操作--读文件
    let data = fs.readFileSync("./a.text");
    console.log(data.toString());