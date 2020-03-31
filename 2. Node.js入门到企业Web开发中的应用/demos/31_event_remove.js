/**
 * 移除事件：
 * 
 * 1. 移除部分：
 * ce.removeListener(事件名，处理函数名)
 * 一个事件，可以绑定多个事件处理函数。
 * 
 * 2. 移除全部：
 * 如果ce.removeListener(事件名)只传递事件名，而不指定具体的处理函数，
 * 则代表移除掉所有的事件
 */

 const EventEmitter = require('events');

 class CustomEmitter extends EventEmitter {}

 function fn1 () {
     console.log('fn1');    
 }

 function fn2 () {
    console.log('fn2');    
}

const ce = new CustomEmitter();

// 一个事件，绑定多个处理函数
ce.on('test', fn1);
ce.on('test', fn2);

setInterval(() => {
    ce.emit('test');
}, 500)

// 过一些时间，移除
setTimeout(() =>{
    // 事件名，处理函数名
    ce.removeListener('test', fn2)
    // 这样就移除了 test 事件的 fn2处理函数，只剩下 fn1

 }, 1500)