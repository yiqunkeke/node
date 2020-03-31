/**
 * writeFile 写文件 
 */

 const fs = require('fs');

 const content = Buffer.from('this is a test.')

// 1. 指定编码格式
//  fs.writeFile('./text', 'This is a test', {
//      encoding: 'utf8'
//  }, err => {
//      if(err) throw err;
//      console.log('Done!')
//  })

 // 简写指定编码
//  fs.writeFile('./text', 'This is a test','utf8', err => {
//     if(err) throw err;
//     console.log('Done!')
// })

// 2. 给写的文件中，传递一个buffer对象
// 此时就可以忽略编码
fs.writeFile('./text', content, err => {
    if(err) throw err;
    console.log('Done!')
})
