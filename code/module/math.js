/**
* math.js
* @author bulbasaur
* @description 

定义一个模块 math
    - 在模块中提供两个方法
        - add(a, b)
        - mul(a, b) => 求城际

* @created 2020-09-02T10:56:01.707Z+08:00
* @copyright None 
* None
* @last-modified 2020-09-02T11:05:31.160Z+08:00
*/

exports.add = function(a, b) {
    var add_ans = a + b;
    
    return add_ans;
};

exports.mul = function(a, b) {
    var mul_ans = a * b;

    return mul_ans;
};