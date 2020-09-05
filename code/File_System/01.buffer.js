/**
* 01.buffer.js
* @author bulbasaur
* @description 
* @created 2020-09-03T11:04:53.193Z+08:00
* @copyright None 
* None
* @last-modified 2020-09-05T10:32:21.889Z+08:00
*/

var str = "Hello NodeJS";

// 将一个字符串保存到 buffer 中
var buf = Buffer.from(str);

/* 英文中是一样的 */
// 占用内存的大小
console.log(buf.length);
// 字符串的长度
console.log(str.length);

/* 中文不一样：一个汉字占用 3 bytes **/


// 创建一个指定大小的 Buffer
// 构造函数不推荐使用
var buf2 = new Buffer(10);
console.log(buf2.length)