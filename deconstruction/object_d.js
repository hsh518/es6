//对象解构
// let node={
//     name:'kant',
//     age:20
// }
// let {name,age}=node;
// console.log(name,age)// kant 20

//解构赋值
// let node={
//     name:'kant',
//     age:20
// },
//     name='jone',
//     age=10;
// ({name,age}=node);
// console.log(name,age);// kant 20
//解构参数传入
function get_node(value) {
    console.log(value)//{name:'kant',age:20}
}
// get_node({name,age}=node)

//解构赋值默认值
// let node={
//     name:'kant',
//     age:20
// }
// let {name,age,value="hello"}=node;
// console.log(name,age,value);// kant 20 hello
//解构赋值变量改动
// let node={
//     name:'kant'
// }
// let {name:getname,age:getage=18}=node;
// console.log(getname,getage);// kant 18

//嵌套解构
// let node={
//     person:{
//         name:'kant',
//         age:18
//     }
// }
// let {person:{name,age}}=node;
// console.log(name,age);// kant 18