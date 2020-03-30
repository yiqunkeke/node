/**
 * Buffer 常用的属性和方法
 * 
 * 2. Buffer 实例的属性和方法
 *    buf.length --- buf本身占的字节数,申请的空间是多少，就返回长度多少。与空间中存放的内容的长度无关。
 *    buf.toString() ---默认是 utf8格式。也可以指定格式。
 * 
 *    buf.fill()----填充buffer
 *    buf.equals()
 *    buf.indexOf()
 *    buf.copy() 
 */

 // length
 const buf6 = Buffer.from('This is a test!');
 console.log(buf6.length);
 // 15

 const buf7 =  Buffer.allocUnsafe(10);
 buf7[0] = 2
 console.log(buf7.length);
 // 10

 // toString()----转换格式，默认是 utf8格式
 console.log(buf7.toString('base64'))
//  AstXrk4BAABqaQ==


// fill() ---填充buffer
const buf8 = Buffer.allocUnsafe(10); // allocUnsafe()只是帮我们申请空间，并不进行初始化
console.log(buf8);
// <Buffer f0 8c bd ff 06 02 00 00 ac 6a>
console.log(buf8.fill(10, 2, 6)); // 从第二个开始填充，到第6个填充结束
// <Buffer f0 8c 0a 0a 0a 0a 00 00 ac 6a>
// 用 0a 填充，而不是10，是因为Buffer默认采用16进制进行表达。
// 16进制中， a 就是 10 


// equals()---两个buffer中的内容是否一样
const buf9 = Buffer.from('test');
const buf10 = Buffer.from('test');
const buf11 = Buffer.from('!test');

console.log(buf9.equals(buf10));
// true
console.log(buf10.equals(buf11));
// false



// indexOf()
// Buffer本身是一个类数组的结构，数组中有的一些功能，它也有。
console.log(buf9.indexOf('es'));
// 1
// 找到则返回第一个匹配的index
// 找不到则返回 -1 
console.log(buf9.indexOf('esa'));