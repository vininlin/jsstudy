/**
 * Created by weining on 2015/10/26 0026.
 */

//回调
function foo(){
    console.log(this.a);
}

function doFoo(fn){
    fn();
}

function doFoo2(o){
    o.foo();
}

var obj = {
    a : 2,
    foo : foo
}
//this指向函数执行时的对象，而不是声明环境
//nodejs中this指向文件对象{}，即this==module.exports

var a = 'a';
doFoo(obj.foo);
doFoo2(obj);

//apply改变函数作用域
function f(s){
    console.log(this.a,s)
}

function bind(fn,obj){
    return function(){
        return fn.apply(obj,arguments);
    };
}
var obj2 = {
    a : 2
}
var bar = bind(f,obj2);
//执行bind中的匿名函数，返回f的执行结果，没有则为undefined
var b = bar(3);
console.log("b=%s",b);

//new 关键字
function f2(a,b){
    this.value = a + b;
}
//bind函数的第一个参数为null表达作用域不变，后面的不定参数将和函数本身的参数按顺序绑定，
//绑定之后执行函数只能从未绑定的参数开始传值
var b1 = f2.bind(null,'p1');
var b2 = new b1('p2');
console.log('b2.value=%s',b2.value);

//自执行函数
function f3(){
    console.log(this.m);
}
var m = 2;
var o = {m : 3, foo : f3};
var p = {m : 4};
//刮号中执行完赋值后，返回的是对象o的foo函数，而f3的执行环境中的a=2,但在nodejs中this.a=undefined
(p.foo = o.foo)();

//变量属性
//变量声明后，扩充它的属性不会改变变量 的原数据类型；
var n = [];
n[0] = 1;
n['foobar'] = 2;
console.log(n.length);
console.log(n.foobar);

//精度问题
//js小数计算不准确，字符串变量 是常量
var k = 'foo';
k[1] = '0';
console.log(0.1 + 0.2 == 0.3 || k);

//命名提升
console.log("====命名提升=====")
f4();
var f4 = 0;
function f4(){
    console.log(1);
}
f4 = function(){
    console.log(2);
}
//以上代表实际上是：
var f4;
function f4(){
    console.log(1);
}
f4();
f4 = 0;
f4 = function(){
    console.log(2);
}
console.log("====closure=====")
//闭包陷井
//在内层函数引用外层函数的自由变量时，外层函数的变量不会持久化
for(var i = 0; i <= 5; i++){
    /*setTimeout(function(){
        console.log(i);
    },i*1000);*/
}

//伪闭包
//闭包是函数的嵌套定义，不是嵌套调用
function f5(){
    console.log(p);
}

function barbar(){
    var p = 3;
    f5();
}
var p =2;
barbar();




