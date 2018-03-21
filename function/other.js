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