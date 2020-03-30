/**
 * Buffer 常用的属性和方法
 * 
 * 1. Buffer 类中的属性与方法（静态属性和方法）
 *      Buffer.byteLength ----占的字节数
 *      Buffer.isBuffer() ----判断是否是Buffer对象
 *      Buffer.concat()---拼接buffer
 */
console.log(Buffer.byteLength('test'));
// 4
console.log(Buffer.byteLength('测试'));
// 6
// 说明中文一个字符用3个字节来表示，并不是一个偶数，这个我们需要记一下

console.log(Buffer.isBuffer({}));
// false
console.log(Buffer.isBuffer(Buffer.from([1, 2, 3])));
// true

const buf1 = Buffer.from('This ')
const buf2 = Buffer.from('is ')
const buf3 = Buffer.from('a ')
const buf4 = Buffer.from('test ')
const buf5 = Buffer.from('!')

const buf = Buffer.concat([buf1, buf2, buf3, buf4, buf5]);
console.log(buf.toString());