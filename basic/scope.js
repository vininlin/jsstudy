/**
 * Created by weining on 2015/10/21 0021.
 */


//javascript没有块级作用域
var a = 10;
if(a > 1){
    var name = 'vinin';
}
console.log(name);
//javascipt只有全局作用域和函数作用域
//除了这两个地方，其它地方不要出现变量声明；在函数体里，用var声明在逻辑代码之前
//作用域在函数定义时已经确定