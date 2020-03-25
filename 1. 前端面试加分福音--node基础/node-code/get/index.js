let http = require("http");
let url = require("url");

http.createServer((req, res) => {
    // console.log(req.url);
    console.log(url.parse(req.url))
    //  /aaa?username=18321839890&password=1111
}).listen(8888)