/**
* 03.aSyncFs.js
* @author bulbasaur
* @description 
* @created 2020-09-07T14:46:52.439Z+08:00
* @copyright None 
* None
* @last-modified 2020-09-07T15:06:28.900Z+08:00
*/

// 引入 fs 模块
var fs = require("fs");

// 打开文件
fs.open("hello.txt", "w", function (err, fd) {
    console.log(arguments);
    // 判断是否出错
    if (!err) {
        console.log(fd);
        // 如果没有出错，对文件进行写入操作
        fs.write(fd, "aSyncFS writing", function (err) {
            if (!err) {
                console.log("Success~");
            }

            // 关闭文件
            fs.close(fd, function (err) {
                if (!err) {
                    console.log("Closed!");
                }
            })
            
        });
    } else {
        console.log(err);
    }
});

// 异步不会有返回值
// console.log(fd);

