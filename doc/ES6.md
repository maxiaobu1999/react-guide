## 箭头函数
https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Functions/Arrow_functions
引入箭头函数有两个方面的作用：更简短的函数并且不绑定this。
替代匿名函数，不能用作构造函数
基础语法
(param1, param2, …, paramN) => { statements } 
(param1, param2, …, paramN) => expression
//相当于：(param1, param2, …, paramN) =>{ return expression; }

// 当只有一个参数时，圆括号是可选的：
(singleParam) => { statements }
singleParam => { statements }

// 没有参数的函数应该写成一对圆括号。
() => { statements }

高级语法
//加括号的函数体返回对象字面量表达式：
params => ({foo: bar})

//支持剩余参数和默认参数
(param1, param2, ...rest) => { statements }
(param1 = defaultValue1, param2, …, paramN = defaultValueN) => { 
statements }

//同样支持参数列表解构
let f = ([a, b] = [1, 2], {x: c} = {x: a + b}) => a + b + c;
f();  // 6

## let 和 const
(ES6) 新增
var 类似Java变量： 全局变量 与 函数内的局部变量。
let 声明的变量只在 let 命令所在的代码块内有效。

const 声明一个只读的常量，一旦声明，常量的值就不能改变。
https://www.runoob.com/js/js-let-const.html

# 模块化
导出（export）和导入（import）
https://zh.javascript.info/import-export
export default 和 export 区别：
1.export与export default均可用于导出常量、函数、文件、模块等
2.你可以在其它文件或模块中通过import+(常量 | 函数 | 文件 | 模块)名的方式，将其导入，以便能够对其进行使用
3.在一个文件或模块中，export、import可以有多个，export default仅有一个
4.通过export方式导出，在导入时要加{ }，export default则不需要
