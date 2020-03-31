/**
 *  给事件处理程序传递参数
 * 
 * 
 */

 const EventEmitter = require('events');

 class CustomEvent extends EventEmitter {}

 const ce = new CustomEvent();

// 注册 error事件， err为形参
 ce.on('error', (err, time) => {
     console.log(err);
     console.log(time);
 })

 // 触发 error事件，并传递参数
 // 此处传递2个参数，可以传递多个参数。
//  emit()函数，第一个参数指定事件名，后面的参数是传递的参数
 ce.emit('error', new Error('Oops!'), Date.now());