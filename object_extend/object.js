//属性初始化器的速记发
function create_quick(name,age){
    return {name,age}
}
// let new_obj=create_quick('kant',20);
// console.log(new_obj);// { name: 'kant', age: 20 }

//方法简写
// let person={
//     name:'kant',
//     getname(){
//         console.log(this.name);
//     }
// }
// person.getname();// kant

//计算属名
// let computed_string='name';
// let person={
//     ['first'+computed_string]:'jone',
//     ['last'+computed_string]:'smith'
// }
// console.log(person);// { firstname: 'jone', lastname: 'smith' }

