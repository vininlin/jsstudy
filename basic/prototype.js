/**
 * Created by weining on 2015/10/19 0019.
 */

//函数都有一个属性prototype,prototype是个对象，它有一个默认属性constructor指向函数本身

function Fn(){}

Fn.prototype.name = "vinin";
Fn.prototype.getAge = function(){
    return 1990;
}

var fn = new Fn();
console.log(fn.name);
console.log(fn.getAge());
console.log(Fn.prototype.constructor)

//每个对象都有一个隐性的属性__proto__，它引用了创建这个对象的函数的prototype;
console.log(fn.__proto__)

console.log(Object.__proto__ === Function.prototype)
var obj = {};
console.log(obj.__proto__)
console.log(Object.prototype)
//Object.prototype.__proto__指向null
console.log(Object.prototype.__proto__)
console.log(Fn.prototype.__proto__)
//Function对象创建了函数
function f1(a,b){
    return a+b;
}
console.log(f1(1,2));
var f2 = new Function('a','b','return a+b;');
console.log(f2(1,2));
console.log(fn.__proto__ === Fn.prototype);
console.log(Object.__proto__ === Function.prototype)
console.log(Function.__proto__ === Function.prototype)
console.log(Function.prototype.__proto__ == Object.prototype)