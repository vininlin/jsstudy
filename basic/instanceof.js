/**
 * Created by weining on 2015/10/20 0020.
 */


function Foo(){}

var fn = new Foo();
console.log(fn instanceof Foo);
console.log(fn instanceof  Object)
//instanceof��һ�������Ƕ���A���ڶ��������Ǻ���B
//instanceof���жϹ����ǣ�����A��__proto__���ң�ͬʱ����B.prototype���ң�
// ������������ҵ�ͬһ�����ã���ͬһ�������򷵻�true�����򷵻�false
console.log(fn.__proto__ === Foo.prototype);
console.log(fn.__proto__ === Object.prototype);
console.log(Foo.prototype.__proto__ === Object.prototype);
console.log(fn.__proto__ === Foo.prototype.__proto__);
console.log('=====================');
console.log(Object instanceof Function);
//Object��Function����
console.log(Object.__proto__ === Function.prototype);
//Function��Function����
console.log(Function.__proto__=== Function.prototype.__proto__);
console.log(Function.prototype.__proto__=== Object.prototype);
console.log(Function instanceof Object);
console.log(Function instanceof Function)