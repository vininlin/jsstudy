/**
 * Created by weining on 2015/10/19 0019.
 */

//��������һ������prototype,prototype�Ǹ���������һ��Ĭ������constructorָ��������

function Fn(){}

Fn.prototype.name = "vinin";
Fn.prototype.getAge = function(){
    return 1990;
}

var fn = new Fn();
console.log(fn.name);
console.log(fn.getAge());
console.log(Fn.prototype.constructor)

//ÿ��������һ�����Ե�����__proto__���������˴����������ĺ�����prototype;
console.log(fn.__proto__)

console.log(Object.__proto__ === Function.prototype)
var obj = {};
console.log(obj.__proto__)
console.log(Object.prototype)
//Object.prototype.__proto__ָ��null
console.log(Object.prototype.__proto__)
console.log(Fn.prototype.__proto__)
//Function���󴴽��˺���
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