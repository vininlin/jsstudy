/**
 * Created by weining on 2015/10/21 0021.
 */


//函数作为返回值
function foo(x){
    var temp  = 10;
    return function bar(y){
        console.log(x + y + (++temp))
    }
}

var bar = foo(2);
bar(1);
bar(2);
bar(3);

//函数作为参数
var a = 10,
    fn = function(x){
        if(x > 10){
            console.log(x);
        }
    };

(function (f){
    var a = 100;
    f(15);
})(fn);