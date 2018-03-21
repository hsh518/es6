//参数默认值设置
// "use strict";
function default_data(name,age=20,callback=function(){console.log('name => '+name)}){
    console.log('age => '+age);
    callback();
}
// default_data('kant')//20 kant
// default_data('kant',30)// 30 kant
// default_data('kant',40,function(){console.log('我是回调函数')})//40 我是回调函数

//参数默认值设置情况2
function default_data(name,age=20,callback){
    console.log('age => '+age);
    callback();
}
// default_data('kant',function(){console.log('我是回调函数')})// 参数错误 callback is not a function
// default_data('kant',undefined,function(){console.log('我是回调函数')})//20 我是回调函数
// default_data('kant',null,function(){console.log('我是回调函数')})// null 我是回调函数
// default_data('kant',40,function(){console.log('我是回调函数')})//40 我是回调函数

function default_arguments(a,b=1){
    console.log(arguments[1]);

    console.log(arguments[0] === a);
    console.log(arguments[1] === b);
    a=3;
    b=4;
    console.log(arguments[0] === a);
    console.log(arguments[1] === b);
}
// default_arguments(1);// undefind true false false false
// default_arguments(1,2);// 2 true true false false

//设置默认值表达示
function getvalue(v1,v2){
    return v1+v2;
}
function default_return(a,b=getvalue(1,2)){
    console.log(a+b);
}
// default_return(1);// 4

//默认参数引用参数
function default_quote(a,b=a){
    console.log(a+b);
}
function default_quote_error(b=a,a){
    console.log(a+b);
}
// default_quote(1)// 2
// default_quote_error(undefined,1)// 错误 a is not defined





