/**
* 01.module.js
* @author bulbasaur
* @description 
* @created 2020-09-02T10:42:00.142Z+08:00
* @copyright None 
* None
* @last-modified 2020-09-02T11:02:36.530Z+08:00
*/

var md = require("./02.module.js");

console.log(md)
console.log(md.txt)

var fun = require("./math");

var a = 4;
var b = 5;

var add_ans = fun.add(a, b);
var mul_ans = fun.mul(a, b);

console.log(add_ans);
console.log(mul_ans);