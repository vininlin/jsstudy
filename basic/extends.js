/**
 * Created by weining on 2015/10/20 0020.
 */

function Foo(){}
var f1 = new Foo();
f1.a = 10;
Foo.prototype.a = 20;
Foo.prototype.b = 100;
console.log(f1.a);
//访问f1.b时，没有这个属性，沿着__proto__找到Foo.prototype，于是找到了b.
console.log(f1.b);
//判断属性是对象的基本属性还是来自prototype的属性的方法，通过hasOwnProperty
//hasOwnProperty来自Object.prototype对象
var item;
for(item in f1){
    if(f1.hasOwnProperty(item)){
        console.log(item);
    }

}
