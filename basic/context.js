/**
 * Created by weining on 2015/10/21 0021.
 */


console.log(a);
var a = 10;

console.log(this)

//��������
console.log(f1);
function f1(){}

//�������ʽ
console.log(f2);
var f2 = function(){}

//ִ�������ģ�
//1��������������������ֵundefined��
//2��this��ֵ

//����ÿִ��һ�Σ���������µ�ִ��������
function fn(x){
    console.log(arguments);
    console.log(x);
}
fn(1);

//�����ڶ���ʱ�����ǵ��ã����Ѿ�ȷ�������ɱ�����������
var a = 10;
function foo(){
    console.log(a);
}
function bar(f){
    var a = 20;
    f();
}
bar(foo);