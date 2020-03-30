setImmediate(() => {
    console.log('setImmediate');
});

setTimeout(()=>{
    console.log('setTimeout');
},0)

process.nextTick(() => {
    console.log('nextTick')
    process.nextTick(()=>{
        console.log('nextTick');
    })
})
// 上面这两个都是在事件队列完成后去执行，但process.nextTick会比setImmediate执行的早