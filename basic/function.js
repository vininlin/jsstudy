/**
 * Created by weining on 2015/10/26 0026.
 */

//�ص�
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
//thisָ����ִ��ʱ�Ķ��󣬶�������������
//nodejs��thisָ���ļ�����{}����this==module.exports

var a = 'a';
doFoo(obj.foo);
doFoo2(obj);

//apply�ı亯��������
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
//ִ��bind�е���������������f��ִ�н����û����Ϊundefined
var b = bar(3);
console.log("b=%s",b);

//new �ؼ���
function f2(a,b){
    this.value = a + b;
}
//bind�����ĵ�һ������Ϊnull��������򲻱䣬����Ĳ����������ͺ�������Ĳ�����˳��󶨣�
//��֮��ִ�к���ֻ�ܴ�δ�󶨵Ĳ�����ʼ��ֵ
var b1 = f2.bind(null,'p1');
var b2 = new b1('p2');
console.log('b2.value=%s',b2.value);

//��ִ�к���
function f3(){
    console.log(this.m);
}
var m = 2;
var o = {m : 3, foo : f3};
var p = {m : 4};
//�κ���ִ���긳ֵ�󣬷��ص��Ƕ���o��foo��������f3��ִ�л����е�a=2,����nodejs��this.a=undefined
(p.foo = o.foo)();

//��������
//���������������������Բ���ı���� ��ԭ�������ͣ�
var n = [];
n[0] = 1;
n['foobar'] = 2;
console.log(n.length);
console.log(n.foobar);

//��������
//jsС�����㲻׼ȷ���ַ������� �ǳ���
var k = 'foo';
k[1] = '0';
console.log(0.1 + 0.2 == 0.3 || k);

//��������
console.log("====��������=====")
f4();
var f4 = 0;
function f4(){
    console.log(1);
}
f4 = function(){
    console.log(2);
}
//���ϴ���ʵ�����ǣ�
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
//�հ��ݾ�
//���ڲ㺯��������㺯�������ɱ���ʱ����㺯���ı�������־û�
for(var i = 0; i <= 5; i++){
    /*setTimeout(function(){
        console.log(i);
    },i*1000);*/
}

//α�հ�
//�հ��Ǻ�����Ƕ�׶��壬����Ƕ�׵���
function f5(){
    console.log(p);
}

function barbar(){
    var p = 3;
    f5();
}
var p =2;
barbar();




