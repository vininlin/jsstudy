/**
 * Created by weining on 2015/10/19 0019.
 */


    //�����Ƕ���
var fn = function(){}
console.log(fn instanceof Object)
console.log(fn instanceof Function)

//������ͨ������������
function User(){
    this.name = 'vinin';
    this.age = 20;
}
var user = new User();
console.log(typeof(user))
console.log(typeof(User))
console.log(typeof(Object))
console.log(typeof(Array))
console.log(typeof(Date))