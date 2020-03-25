// 1. 导出变量
// exports.a = 1;
// exports.b = 2;
// let c = 3; 

// 2. 导出对象
// module.exports = {
//     a: 1,
//     b: 2
// }

// 3. 导出方法 -------最常用的
module.exports = function() {
    console.log(123);
}


// 4. 导出class
module.exports = class {
    constructor(name) {
        this.name = name
    }

    show() {
        console.log(this.name)
    }
}
