/**
 * 在NodeJS中，汉字占3个字节，在日常处理中可能会遇到中文乱码问题，现在简单介绍下解决方案
 *  首先先来还原下中文乱码问题
 * 可以借助内置的 string_decoder 包
 * string_decoder（字符串解码器）
 */

 const buf = Buffer.from('中文字符串！');

 for(let i = 0; i < buf.length; i+=5) {
     const b = Buffer.allocUnsafe(5);
     buf.copy(b, 0, i); // 把原来buf里面的东西，copy到 b 中
     console.log(b.toString());
 }