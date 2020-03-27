const mod = require('./09_global');

console.log(mod.testVar);

// console.log(testVar);
// 由于NodeJS 会自动给模块加上 function(){}进行包裹，所以直接访问testVar会报ReferenceError: testVar is not defined

console.log(testVar2);
// 但是如果我们把 testVar2 变量挂在 global对象下，就可以直接访问。