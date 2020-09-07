/**
* 03.aSyncFs.js
* @author bulbasaur
* @description 
* @created 2020-09-07T14:46:52.439Z+08:00
* @copyright None 
* None
* @last-modified 2020-09-07T14:56:16.368Z+08:00
*/

// 引入 fs 模块
var fs = require("fs");

// 打开文件
fs.open("hello.txt", "w", function (err, fd) {
    console.log(arguments);
    // 判断是否出错
    if (!err) {
        console.log(fd);
    } else {
        console.log(err);
    }
});


// console.log(fd);

