/**
* 02.fs.js
* @author bulbasaur
* @description 
* @created 2020-09-05T11:01:17.068Z+08:00
* @copyright None 
* None
* @last-modified 2020-09-07T14:42:42.303Z+08:00
*/

var fs = require("fs");

var fd = fs.openSync("hello.txt", "w");

console.log(fd);

// console.log("hello.txt", "w")

// 像文件中写入内容
fs.writeSync(fd, "It is a nice day~");

// 关闭文件
fs.closeSync(fd);