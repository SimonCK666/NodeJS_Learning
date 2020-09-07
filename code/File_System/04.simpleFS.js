/**
* 04.simpleFS.js
* @author bulbasaur
* @description 
* @created 2020-09-07T15:09:31.218Z+08:00
* @copyright None 
* None
* @last-modified 2020-09-07T15:16:30.293Z+08:00
*/

// 引入 fs 模块
var fs = require("fs");

fs.writeFile("hello.txt", "According to writeFile", function (err) {
    if (!err) {
        console.log("Success!")
    }
    
});