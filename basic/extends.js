/**
 * Created by weining on 2015/10/20 0020.
 */

function Foo(){}
var f1 = new Foo();
f1.a = 10;
Foo.prototype.a = 20;
Foo.prototype.b = 100;
console.log(f1.a);
//����f1.bʱ��û��������ԣ�����__proto__�ҵ�Foo.prototype�������ҵ���b.
console.log(f1.b);
//�ж������Ƕ���Ļ������Ի�������prototype�����Եķ�����ͨ��hasOwnProperty
//hasOwnProperty����Object.prototype����
var item;
for(item in f1){
    if(f1.hasOwnProperty(item)){
        console.log(item);
    }

}
