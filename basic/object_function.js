/**
 * Created by weining on 2015/10/19 0019.
 */


    //函数是对象
var fn = function(){}
console.log(fn instanceof Object)
console.log(fn instanceof Function)

//对象是通过函数创建的
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