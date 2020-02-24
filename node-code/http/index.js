/**
 * 重点： HTTP模块
 * 
 *  服务器对象： http.createServer()
 */

let http = require("http");
let fs = require("fs")
http.createServer((req, res) => {
    // console.log("我来了");
    // res.write("index"); // 响应中返回内容
    // res.end();// 代表响应结束
    fs.readFile(`./${req.url}`, (err, data) => {
        if(err) {
            console.log(err);
            res.writeHead(404);
            res.end("404 not found")
        } else {
            res.end(data);
        }
    })
    // console.log(req.url)
}).listen(8888)