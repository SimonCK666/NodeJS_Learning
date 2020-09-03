/**
* 01.npm.js
* @author bulbasaur
* @description 
* @created 2020-09-03T10:35:21.011Z+08:00
* @copyright None 
* None
* @last-modified 2020-09-03T10:40:45.200Z+08:00
*/

/* node 在使用模块名字来引入模块是，他会首先在当前目录的 node_modules 文件夹中
    寻找是否含有该模块，如果有，直接使用。
   如果没有，去上一级目录中寻找，直到找到为止。
   直到找到磁盘的根目录，依然没有，报错
*/

var math = require("math");

console.log(math.add(132, 342));