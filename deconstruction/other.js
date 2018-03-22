//混合解构
// let node={
//     person:{name:'kant'},
//     num:[1,2,3]
// }
// let {person:{name},num:[num1]}=node;
// console.log(name,num1);// kant 1

//参数解构,
function getoptions({name,age=10}={}){//{name,age}={}为非必选参数
    console.log(name,age);
}
getoptions({name:'kant'});// kant 10


