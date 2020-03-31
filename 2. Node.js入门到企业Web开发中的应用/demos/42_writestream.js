/**
 * writestream
 * 我也不是一次都放到内存中都写给你了，而是我生产一点就写给你一点
 * 
 * 写的内容必须是字符串或者 buffer
 */

 const fs = require('fs');

 const ws = fs.createWriteStream('./test.txt');

 const tid = setInterval(() => {
    const num = parseInt(Math.random() * 10);
    console.log(num);
    if(num < 8) {
        // 小于8 就把数据写进 stream
        ws.write(num +'');
    } else {
        // 大于8 就清除停止写，并结束
        // 结束后会触发 finish事件 
        clearInterval(tid);
        ws.end()
    }

 }, 200);

 // 监听结束事件 ，结束后会触发 finish事件
 ws.on('finish', () => {
     console.log('Done!');   
 })
