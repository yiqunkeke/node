/**
 * 频率高的操作有 file 和 网络。这两个操作有一个共同点：都需要处理二进制数据。
 * 
 * 我们知道在ES6引入TypedArray之前是没有处理二进制数据的能力的。
 * 
 * NodeJS又比ES6要早一点，为了解决这个问题，就引入了Buffer API。Buffer API使用的频率比较高，
 * 所以NodeJS 就把它挂在了 global 对象上，这样我们在使用的时候就可以像 process 和 console一样直接使用，
 * 而不需要像 path一样引入才可以用。
 * 
 * 
 * Buffer三要点
 * 
 * 1. Buffer 用于处理二进制数据流
 * 
 * 2. 实例类似整数数组，大小固定
 *    它里面都是一些0-255的数字，默认用16进制来表示，
 *    它跟整数数组最大的区别是：它的大小是固定的。
 *    它不能像数组一样进行随便修改长度，追加内容之类的操作。
 *    当我们实例化之后，它是多大就是多大，不能再进行变更。
 * 
 * 3. C++ 代码在 V8 堆外分配物理内存
 *    这些与底层架构有关，NodeJS中跑的代码并不纯粹是用 JavaScript跑的，
 *    还有一部分是用 C++，Buffer就是这样的
 * 
 * 
 * Buffer 历史
 * 
 * 由于需要高频的处理二进制数据流，所以引入了Buffer。
 * http://nodejs.cn/api/buffer.html#buffer_buffer
 */

 console.log(Buffer.alloc(10));
//  <Buffer 00 00 00 00 00 00 00 00 00 00>
console.log(Buffer.alloc(20));
// <Buffer 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00>
console.log(Buffer.alloc(5,1));
// <Buffer 01 01 01 01 01>
console.log(Buffer.allocUnsafe(5,1));
// <Buffer 00 00 00 00 00>
console.log(Buffer.from([1, 2, 3]));
// <Buffer 01 02 03>
console.log(Buffer.from('test'));
// <Buffer 74 65 73 74>

 