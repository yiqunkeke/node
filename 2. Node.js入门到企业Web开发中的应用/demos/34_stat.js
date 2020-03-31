/**
 * stat 表示跟文件信息有关的东西
 * 
 */

 const fs = require('fs');

 fs.stat('./34_stat.js', (err, stats) => {
     if(err) throw err;

     console.log(stats.isFile()); 
     // true
     console.log(stats.isDirectory());
     // false

     console.log(stats);
    //  Stats {
    //     dev: 2926748212,
    //     mode: 33206,
    //     nlink: 1,
    //     uid: 0,
    //     gid: 0,
    //     rdev: 0,
    //     blksize: 4096,
    //     ino: 562949953703029,
    //     size: 277,
    //     blocks: 0,
    //     atimeMs: 1585638421557.0483,
    //     mtimeMs: 1585638421557.0483,
    //     ctimeMs: 1585638421557.0483,
    //     birthtimeMs: 1585638222712.5781,
    //     atime: 2020-03-31T07:07:01.557Z,
    //     mtime: 2020-03-31T07:07:01.557Z,
    //     ctime: 2020-03-31T07:07:01.557Z,
    //     birthtime: 2020-03-31T07:03:42.713Z
    //   }
    
 })

 /**
  * 怎么判断读到的是不是一个文件呢？
  * 就使用这里的 stats
  */

  /**
   * 
   *  建议用异步：
   *  原因是高并发的情况下，会堵塞其他的用户
   */