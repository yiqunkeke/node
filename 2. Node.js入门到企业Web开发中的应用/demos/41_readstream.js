/**
 * 前面讲的都是一些比较常用基础的api
 * 接下来后面会讲一些稍微有些难度的。
 * 
 * 第一个就是 readstream
 * 
 * 关于stream几乎后端编程必用的知识。后面也会多少涉及到，
 * 但是由于难度有点高，所以我们先来介绍下什么是stream？
 * 
 * 1. 什么叫做 stream?
 * 我们一般把它翻译成流：有方向的数据。
 * 首先它是有方向的，是从一个设备流向了另外一个设备。
 * 也可以说从一个文件流向了另外一个文件。
 * 
 * 2. 流的东西是什么 ？
 * 是数据。
 * 从 stdin 流向stdout。
 * 
 * 3. 想形成stream必须有两个条件：
 * 一个是得有方向，另一个是它是数据。
 * 
 * 
 * 4. stream的好处
 * 之前操作文件的时候，都是把文件放到了内存中，直接操作。除了放到内存中操作，
 * 我们还可以让它像流一样。就像家里有自来水管这个概念一样，如果需要接一通水，
 * 可以有两种方式：
 * 上来给你一个桶，接满后，再给你。
 * 另外一种是自来水管，桶在接水，一边流一边给。
 * 就好比生产一点，给你一点让你消费，这样在有些场景下好处是非常明显的。
 * 
 * 
 * 5. stream的应用也是非常广泛
 * 比如说用电脑看电影，电脑的内存只有512M时却也可以看2G的电影，为什么？
 * 理论上电影要想读的话，必须整个的放到电脑内存中，可是你内存只有512M怎么看？
 * 这个用了 stream 就好解决了。
 * 我一点点读，往内存里面一点点放，放给你，你一点点看。
 * 就好像一个3L的桶怎么用来装5L的水呢？
 * 我一点点给你，你那边一点点消费掉了，你一点点再喝。我总共给你里面放了5L水，
 * 但不会一次给你5L，因为你里面放不开。
 * 
 * stream的好处非常多，先给大家简单介绍到这里。
 * 接下来看一下，使用fs如何来操作 stream
 */

 const fs = require('fs');

 const rs = fs.createReadStream('./41_readstream.js');
 // 这样我们就创建了一个readStream，并起名为 rs
 // rs的数据：对应的是41_readstream.js文件

// rs方向：输出到控制台
rs.pipe(process.stdout) 
/**
 * process进程模块中有两个重要的： stdin 和 stdout
 * 
 * process.stdout 就是控制台
 * 
 * 
 * 这个例子与前面讲的 readFile很像，但比readFile的实现更优雅一些：
 * 好处就像我们在网上想下载一个电影一样，也是一点点吐给我们的，并不会一次给我们，
 * 我们的网页为什么在网速慢的时候会从上到下一点点给出来的，
 * 也是我们前面提到的，用户访问网页内容并不是一次都给的，而是吐一点给一点。
 * 
 * 像如果直接readFile的话，是做不到这一点的。
 * 因为readFile是一次就给放到内存中了。
 * 用 pipe 这种方式就像是一个水管一样。读一点给你一点。
 */
