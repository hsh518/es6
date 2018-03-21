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