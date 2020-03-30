/**
 * path.format()方法会从一个对象返回一个路径字符串。与path.parse()相反。
 */

const {parse, format} = require('path');

const filePath = '/uss/local/node_modules/n/package.json'

const ret = parse(filePath);

console.log(ret);
// {
//     root: '/',
//     dir: '/uss/local/node_modules/n',
//     base: 'package.json',
//     ext: '.json',
//     name: 'package'
//   }


console.log(format(ret));
// /uss/local/node_modules/n\package.json