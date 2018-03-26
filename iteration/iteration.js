// 创建迭代器
// function createIteration(item){
//     let i=-1;
//     return  {
//         next(){
//             i++;
//             return i<item.length?item[i]:undefined;
//         }
//     }
// }
// let getitem=createIteration([1,2,3]);
// console.log(getitem.next());// 1
// console.log(getitem.next());// 2
// console.log(getitem.next());// 3

//创建生成器
// function *createIteration(item){// 必须加*
//     for(let i=0;i<item.length;i++){
//         yield item[i];
//     }
// }
// 生成器函数表达式
// let createIteration=function *(item){
//      for(let i=0;i<item.length;i++){
//         yield item[i];
//     }
// }
// let getitem=createIteration([1,2,3])
// console.log(getitem.next());// { value: 1, done: false }
// console.log(getitem.next());// { value: 2, done: false }
// console.log(getitem.next());// { value: 3, done: false }
// console.log(getitem.next());// { value: undefind, done: false }

//for of
// let number=[1,2,3]
// for(num of number){
//     console.log(num)// 1,2,3
// }

//访问默认迭代器
// let item=[1,2]
// console.log(item[Symbol.iterator]);//[Function: values]
// let getitem=item[Symbol.iterator]();
// console.log(getitem.next());// { value: 1, done: false }
// console.log(getitem.next());// { value: 2, done: false }

//创建可迭代对象
// let iteration={
//     item:[],
//     *[Symbol.iterator](){
//         for(let i=0;i<this.item.length;i++){
//             console.log('hello')
//             yield this.item[i]
//         }
//     }
// }
// iteration.item.push(1);
// iteration.item.push(2);
// for( num of iteration){
//     console.log(num)// hello 1 hello 2
// }

//集合迭代器
// let arr=['k','j','q'];
// let set=new Set(['a','b','c']);
// let map=new Map([['name','kant'],['age',20]]);
// function iteration(v){  
//     for(let key of v.entries()){
//         console.log(key);
//     }
//     for(let key of v.values()){
//         console.log(key);
//     }
//     for(let key of v.keys()){
//         console.log(key);
//     }
// }
// iteration(arr);// 数组的values()方法有错误？？？？？ 目前不支持
// iteration(set);
// iteration(map);

//字符串迭代器(未发现区别？？？？？)
// let string="A  B";
// for(let i=0;i<string.length;i++){
//     console.log(string[i]);
// }
// console.log('---------------');
// for(let str of string){
//     console.log(str);
// }

//Nodelist的迭代器
// let divs=document.getElementsByTagName('div');
// for(let div of divs){
//     console.length(div.id);
// }

//传递参数给迭代器
// function *createIteration(){
//     let a=yield 0;
//     let b=yield a+2;
//     yield b+3;
// }
// let iteration=createIteration();
// console.log(iteration.next()); // { value: 0, done: false }
// console.log(iteration.next(2));// { value: 4, done: false }
// console.log(iteration.next(3));// { value: 6, done: false }
// console.log(iteration.next()); // { value: undefined, done: true }
//在迭代器中抛出错误
// console.log(iteration.next()); // { value: 0, done: false }
// console.log(iteration.next(2));// { value: 4, done: false }
// console.log(iteration.throw(new Error('error: this is a error')));// error: this is a error

//生成器的return语句
// function *createIteration(){
//     yield 1;
//     return 2;
//     yield 3;
// }
// let iteration=createIteration();
// console.log(iteration.next());// { value: 1, done: false }
// console.log(iteration.next());// { value: 2, done: false }
// console.log(iteration.next());// { value: undefined, done: false }

//生成器委托
// function *createnumber(){
//     yield 1;
//     yield 2;
//     return ['red','black']
// }
// function *createrest(result){
//     for(let i=0;i<result.length;i++){
//         yield result[i];
//     }
// }
// function *createall(){
//     let result=yield *createnumber();
//     yield result;
//     yield *createrest(result);
// }
// let all=createall();
// console.log(all.next());// { value: 1, done: false }
// console.log(all.next());// { value: 2, done: false }
// console.log(all.next());// { value: [ 'red', 'black' ], done: false }
// console.log(all.next());// { value: 'red', done: false }
// console.log(all.next());// { value: 'black', done: false }
