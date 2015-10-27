/**
 * Created by weining on 2015/10/20 0020.
 */


function Foo(){}

var fn = new Foo();
console.log(fn instanceof Foo);
console.log(fn instanceof  Object)
//instanceof第一个变量是对象A，第二个变量是函数B
//instanceof的判断规则是：沿着A的__proto__来找，同时沿着B.prototype来找，
// 如果两条线能找到同一个引用，即同一个对象，则返回true。否则返回false
console.log(fn.__proto__ === Foo.prototype);
console.log(fn.__proto__ === Object.prototype);
console.log(Foo.prototype.__proto__ === Object.prototype);
console.log(fn.__proto__ === Foo.prototype.__proto__);
console.log('=====================');
console.log(Object instanceof Function);
//Object由Function创建
console.log(Object.__proto__ === Function.prototype);
//Function由Function创建
console.log(Function.__proto__=== Function.prototype.__proto__);
console.log(Function.prototype.__proto__=== Object.prototype);
console.log(Function instanceof Object);
console.log(Function instanceof Function)