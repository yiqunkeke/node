/**
 * 我们在介绍 NodeJs时，就知道了NodeJS有两个核心的特性：事件驱动和异步IO
 * 接下来我们介绍下NodeJS官方文档中的events(事件)
 * 
 * 1. 大部分NodeJS核心API都采用异步事件驱动的架构。
 *      比如说前面提到的IO：当主进程遇到一个IO，把它交给操作系统底层，主进程并不会受到阻塞。
 *      IO完成之后会通知主进程。
 *      怎么做到通知呢？是通过触发事件来告诉主进程。
 * 
 * 2. 官方举例
 *      eg1: 比如,net.Server对象会在每次有新连接时触发事件。每当有client进行连接的时候，server就会触发connection事件，
 *          此时，如果我们绑定了connection事件，给它绑定了一些事件处理程序，则每次客户端来都会自动地调一些相应的处理程序。
 * 
 *      eg2: 再比如，fs.readStream ，当我们读取一个文件时，文件被打开的时候就会触发一个事件。如果我们希望在文件被打开的时候做一些事情，
 *          我们就可以绑定相应的事件进行监听。当fs模块触发之后就会做一些相应的事情。当数据可读的时候会触发一个事件，告诉我们程序数据可以
 *          供你消费了，该做什么就去做什么 。
 *       
 *      这是一个很好理解的架构，而不用每次你来问我：你好了没有，你好了没有？而是我好了告诉你。我们可以简单的这样理解事件。
 * 
 *      再比如，我们给一个div绑定一个click事件，当用户在UI上触发click事件，对应的alert()一个内容。这就是简单的事件模型。
 *      
 * 3. 不同的是：
 *      在NodeJS中，所有能触发事件的对象都是 EventEmitter 类的实例。这些对象开放了一个 eventEmitter.on()函数，
 *      允许将一个或多个函数函数绑定到会被对象触发的命名事件上。事件名称通常是驼峰式的字符串，但也可以使用任何有效的JavaScript属性名。
 *      
 *      当 EventEmitter 对象触发一个事件时，所有绑定在该事件上的函数都会同步地调用。监听器的返回值会被丢弃。
 * 
 *      例子：一个绑定了一个监听器的 EventEmmiter实例。 eventEmitter.on()方法用于注册监听器， eventEmitter.emit()方法用于触发事件。
 * 
 */

 const EventEmitter = require('events'); // 引入events模块

 class CustomEvent extends EventEmitter {}  // 定义自己的class--->继承 EventEmitter类

 const ce = new CustomEvent(); // 创建实例
 
 // 注册监听器
 ce.on('test', () => {
     console.log('This is a test!');
 })

 // 触发事件
 setInterval(() => {
     ce.emit('test');
 }, 500)



