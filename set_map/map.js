//map
// let map=new Map();
// map.set('name','kant');
// console.log(map.get('name'));// kant
// console.log(map);// Map { 'name' => 'kant' }    
// console.log(map.size);// 1

//map-->forEach
// let map=new Map([['name','kant'],['age',20]]);
// map.forEach((value,key,ownermap)=>{
//     console.log(key+' => '+value);// name => kant ...
//     console.log(ownermap===map);// true ...
// })

//weakmap
// let weakmap=new WeakMap();
// let key1={
//     dom:'dom'
// }
// weakmap.set(key1,'dom');
// console.log(weakmap.get(key1));// dom
// key1=null// 解除引用