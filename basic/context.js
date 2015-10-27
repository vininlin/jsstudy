/**
 * Created by weining on 2015/10/21 0021.
 */


console.log(a);
var a = 10;

console.log(this)

//函数声明
console.log(f1);
function f1(){}

//函数表达式
console.log(f2);
var f2 = function(){}

//执行上下文：
//1、变量、函数声明，赋值undefined。
//2、this赋值

//函数每执行一次，都会产生新的执行上下文
function fn(x){
    console.log(arguments);
    console.log(x);
}
fn(1);

//函数在定义时（不是调用），已经确认了自由变量的作用域
var a = 10;
function foo(){
    console.log(a);
}
function bar(f){
    var a = 20;
    f();
}
bar(foo);