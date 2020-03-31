/**
 * 解决异步回调地狱
 * 
 * 解决方法：
 * 1. promisefy: 可以把一个error-first的回调变成一个promise的同步写法
 * 
 * 
 * 2. es6: async await
 */

 // 1. 回调地狱
 ()=> {
     () => {
         () => {

         }
      }
 }


 // 2. 通过promisfy把异步回调进行promise化
 const fs = require('fs');
 const promisify = require('util').promisify;  // promisify在内置模块 util中，可以直接使用

 const read = promisify(fs.readFile);

//  read('./43_promisify.js')
//  .then(data=> {
//     console.log(data.toString());
//  })
//  .catch(err => {
//      console.log(err);
//  })


 // 3.使用 async await 更简洁
 async function test() {
    try {
        const content = await read('./43_promisify.js');
        console.log(content.toString());
    } catch(err) {
        console.log(err);   
    }
 }

 test();