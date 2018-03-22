//Object.is()方法
// console.log(+0===-0);// true
// console.log(Object.is(+0,-0));// false
// console.log(NaN===NaN);// false
// console.log(Object.is(NaN,NaN));// true

//Object.assign()方法
// let obj={c:3};
// Object.assign(obj,{a:1,b:2},{d:4});
// console.log(obj);// { c: 3, a: 1, b: 2 , d: 4}

//修改对象原型
// let obj={
//     a:1
// }
// let new_obj=Object.create(null);
// Object.setPrototypeOf(new_obj,obj);
// console.log(new_obj.a);// 1
// console.log(Object.getPrototypeOf(new_obj)===obj);// true
// console.log(new_obj);// {}

//super引用简单原型访问
// let person={
//     getname(){
//         return 'kant';
//     }
// }
// // let new_person={
// //     getname(){
// //         return 'Immanuel '+Object.getPrototypeOf(this).getname.call(this);
// //     }
// // }
// let new_person={
//     getname(){
//         return 'Immanuel '+super.getname();
//     }
// }

// Object.setPrototypeOf(new_person,person);
// console.log(new_person.getname())// Immanuel kant
// let err_person=Object.create(new_person);
// console.log(err_person.getname());//不使用super 反复递归造成内存溢出 使用super后正常返回