//创建符号
// let name=Symbol();
// let person={};
// person[name]='kant';
// console.log(person[name]);// kant
// 描述符号值
// let name=Symbol('person name');
// let person={};
// person[name]='kant';
// console.log(person);// { [Symbol(person name)]: 'kant' }
// console.log(name);// Symbol(person name)
//typeof判断符号值
// let symbol=Symbol();
// console.log(typeof symbol);// symbol

//共享符号值 
// let name=Symbol('name');
// let name2=Symbol('name');
// let person={};
// person[name]='kant';
// console.log(person[name2]);// undefind

// let age=Symbol.for('age');
// let age2=Symbol.for('age');
// person[age]=20;
// console.log(person[age2]);// 20
// //keyFor获取键值
// let symbol1=Symbol.for('text symbol');
// let symbol2=Symbol('text symbol');
// console.log(Symbol.keyFor(symbol1));// text symbol
// console.log(Symbol.keyFor(symbol2));// undefind

//检索符号属性
let name=Symbol('name');
let like=Symbol.for('like');
let person={
    [name]:'kant',
    [like]:'banner',
    age:20
}
console.log(Object.getOwnPropertySymbols(person));// [ Symbol(name), Symbol(like) ]
console.log(Object.keys(person));// [ 'age' ]
console.log(Object.getOwnPropertyNames(person));// [ 'age' ]