/**
 * 事件只触发一次
 * 类似jquery有 once, nodeJS中也有 once
 * 
 */

 const EventEmitter = require('events');

 class CustomEmitter extends EventEmitter {}

 const ce = new CustomEmitter();

 // 注册test，但只执行一次
 ce.once('test',() => {
     console.log('test event');
 })

 setInterval(() => {
     ce.emit('test');
 }, 500)