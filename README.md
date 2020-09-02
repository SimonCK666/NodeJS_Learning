# Node.js Learning

## 1. 命令行

### 1. 环境变量 => path

- 当我们在命令行窗口打开一个文件，或调用一个程序时，系统回收现在当前目录下寻找文件程序，如果找到了则直接打开，如果没有找到，会**依次在环境变量 `Path` 中寻找**，直到找到为止，如果没找到就报错。
- 相似：作用域

```js
var a = 100;

function fn() {
    var a = 200;
    
    function fn2() {
        var a = 300;
    
        console.log(a);
    }
    
}

fn()
// 此时 a = 300


var a = 100;

function fn() {
    var a = 200;
    
    function fn2() {
        // var a = 300;
    
        console.log(a);
    }
    
}

fn()
// 此时 a = 200

var a = 100;

function fn() {
    // var a = 200;
    
    function fn2() {
        // var a = 300;
    
        console.log(a);
    }
    
}

fn()
// 此时 a = 100
```

- 可以将经常需要访问的程序和文件的路径添加到 `path`中

### 2. 进程和线程

#### 1. 进程

- 进程负责位程序的运行提供必备的环境
- 进程相当于工厂中的车间

#### 2. 线程

- 线程是计算机中最小的计算单位，线程负责执行进程中的程序
- 线程相当于工厂中的工人

##### - 单线程

- `js`是单线程
- `chrome`是单线程

##### - 多线程

- 性能相较于单线程好

## 2. Node.js 简介

### 1. 概念

- 一个能够在服务器端运行`js`的开放源代码，跨平台`js`运行环境

<img src="E:\NodeJS_Learning\image\服务器请求.png" alt="avatar" style="zoom:50%;" />

P.s: - 服务器响应速度：带宽

### 2. 模块化

- 如果程序设计的规模达到一定程度，则需要对其进行模块化管理
- 模块化可以有多种形式，但直到应该提供能够将代码分割为多个源文件的机制
- `CommonJS`的模块功能可以帮我们解决该问题

### 3. Common JS

- 主要是为了弥补 `js` 没有标准的缺陷
- 能够在任何地方运行
- 定义：
  - 引用
  - 定义
  - 表示

### 3. 什么是模块

- 在 `Node` 中，一个 `js` 文件就是一个模块

### 4. 引入其他模块

- 通过 `require("")` 函数引入外部的模块
- `require("")` 可以传递一个文件的路劲作为参数，`node`会自动引入外部模块
- 这里路径，如果使用相对路径，必须使用 `./..` 开头
- 使用 `require("")`引入模块后，该函数会返回一个对象，这个对象代表的是引入的模块
- 在`node`中，每一个`js`代码都是独立运行在一个函数中，而不是全局中。所以每一个模块中的变量和函数在其他模块中无法访问

### 5. 向外部暴露属性或方法

- 可以通过 `exports`向外部暴露变量和方法
- 只需要将暴露给外部的变量或方法设置为`export`的属性即可

### 6. 模块标识

- 就是模块的名字,也就是传递给`require("")`方法的参数,它必须是符合驼峰命名法的字符串,或者是仙骨笛路径或绝对路径
- 模块互不干扰
- 通过模块表示找到我们的模块
- 分类:
  - 核心模块
    - 由 `node` 引擎提供的模块
    - 核心模块就是引入模块的名字
  - 文件模块
    - 由用户自己创建的模块
    - 模块标识就是文件的路径 (绝对路径,相对路径)

> 在`node`中有一个全局对象 `global` ,他的作用和网页中 `window` 类似.
>
> ​	在全局中创建的变量都会作为 `global` 的属性保存
>
> ​	在全局中创建的函数都会作为 `global` 的方法保存
>
> 当`node`在执行模块中的代码时,他会首先在代码的最顶部添加函数代码
>
> `function (exports, require, module, __filename, __dirname){}`
>
> 实际上模块中的代码都是包装在一个函数中指向的,并且在函数在执行时,同时传递了 5 个实参:
>
> `exports`: 将函数和对象暴露到外部 
>
> `require`:  函数: 用来引入外部的模块
>
> `module`: 模块: 代表的是当前模块本身 (exports 就是 module 的属性  `exports == module.exports`)
>
> ​		P.s. : 通过 `exports` 只能使用 `.` 的方式来向外暴露
>
> ```js
> exports.name = "Sun wukong";
> exports.age = 10;
> exports.sayName = function() {
>     console.log("I'm Sun wukong.");
> }
> ```
>
> 
>
> ​				 通过 `module.exports` 既可以 `.` , 也可以直接赋值
>
> ```js
> module.exports = {
>     name: "Zhu bajie",
>     age: 34,
>     sayName: function() {
>         console.log("I'm Zhu bajie");
>     }
> }
> ```
>
> 
>
> `__filename __`: 当前模块完整文件路径
>
> `dirname`: 当前模块文件夹路径

> `console.log(arguments)`
>
> 为 `js` 中封装实际参数的变量,可以通过打印此变量得到所有的局部变量

> `console.log(arguments.callee)`
>
> 保存的是当前执行的函数对象

```js
/* E:\NodeJS_Learning\code\module\04.module.js **/
var a = 10;

// 全局变量
b = 20;

console.log(global);

// 封装实际参数的 arguments
console.log(arguments);
// 保存的是当前执行的函数对象
console.log(arguments.callee + "");

```

```js
/* 执行结果 **/
/*  
	说明每个模块中的变量都相当于在一个函数中执行
**/
function (exports, require, module, __filename, __dirname) {
    var a = 10;

    // 全局变量
    b = 20;

    console.log(global);

    // 封装实际参数的 arguments
    console.log(arguments);
    // 保存的是当前执行的函数对象
    console.log(arguments.callee + "");

}
```

<img src="E:\NodeJS_Learning\image\堆栈内存.png" alt="avatar" style="zoom:50%;" />

### 7. Package

- `CommonJS`的包规范允许我们将一组相关的模块组合到一起,形成一组完整的工具
- `CommonJS`的包规范由**包结构**和**包描述文件**两个部分组成
- 包结构
  - 用于组织包中的各种文件
  - 包实际上就是一个压缩文件,解压后还原为目录.符合规范的目录,应该包含如下文件:
    - `package.json`: 描述文件
    - `bin`: 可执行二进制文件
    - `lib`: `js`代码
    - `doc`: 文档
    - `test`: 单元测试
- 包描述文件
  - 描述报的相关信息,以提供外部读取分析

> 相关代码: E:\NodeJS_Learning\code\module