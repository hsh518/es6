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

//剩余参数
function surplus(obj,...keys){// ...keys后不能再有参数
    let newobj=Object.create(null);
    for(let i=0;i<keys.length;i++){
        newobj[keys[i]]=obj[keys[i]];
    }
    console.log(newobj);
}
// surplus({a:1,b:2,c:3},'a','b','c');// {a:1,b:2,c:3}

//函数构造器
// let func=new Function("...keys","return keys[0]+keys[1]");
// console.log(func(1,2));// 3

//扩展运算符
// let arr_keys=[1,2,3,4,5];
// console.log(Math.max(...arr_keys,4));// 5

//特殊的函数名
// let some_func=function(){}
// console.log(some_func.bind().name);// bound some_func
// let new_func=new Function()
// console.log(new_func.name);// anonymous

//new.target元属性
function new_target(){
    if (typeof new.target !== 'undefined') {
        this.name='kant';
    }else{
        throw new Error('未使用 new');
    }
}
// let new_obj=new new_target();
// let new_obj1=new_target();// 错误
// let new_obj2=new_target.call(new_obj);// 错误

//非严格模式的块级函数
// if (true) {
    
//     console.log(typeof block_func);// function
//     function block_func(){

//     }
// }
// console.log(typeof block_func);// function  严格模式下为 undefind

//=>函数
let arrow_sum=(num1,num2)=>num1+num2;
// console.log(arrow_sum(1,2));// 3

//=>函数返回对象字面量
let arrow_obj=()=>({a:1,b:2});
// console.log(arrow_obj());// {a:1,b:2}

//没有this绑定
function this_callback(callback){
    this.num=1
    callback();
}

let this_obj={
    num:2,
    getnum1:function(){
        this_callback(function () {
        console.log(this.num)
     })
    },
    getnum2:function(){
        this_callback(()=>{
            console.log(this.num)
        })
    }
}
// this_obj.getnum1();// 1
// this_obj.getnum2();// 2