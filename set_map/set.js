//创建set添加项目
// let set=new Set();
// set.add(1);
// set.add('1');
// console.log(set);// Set { 1, '1' }
// console.log(set.size);// 2
//以对象为键
// let key1={},
//     key2={};
// set.add(key1);
// set.add(key2);
// console.log(set);// Set { {}, {} }

//去除数组中重复的值
// let set=new Set([1,2,3,4,5,5,5]);
// console.log(set);// Set { 1, 2, 3, 4, 5 }
// //has()方法判断是否存在相应的值
// console.log(set.has(6));// false

//移除值
// let set=new Set([1,2,3,4,5]);
// set.delete(1);
// console.log(set);// Set { 2, 3, 4, 5 }
// set.clear();
// console.log(set);// Set {}

//set-->forEach
// let set=new Set([1,2,3]);
// set.forEach((value,key,ownset)=>{
//     console.log(key+' => '+value);// 1=>1...
//     console.log(ownset===set);// ture...
// })

//set转数组
function set_arr(value){
    return [...new Set(value)]
}
// console.log(set_arr([1,2,2,2]));// [1,2]

//set弱引用
// let weakset=new WeakSet();
// let key1={};
// weakset.add(key1);
// console.log(weakset.has(key1));// true
// key1=null;
// console.log(weakset.has(key1));// false

 let weakset=new WeakSet([1,2])// 错误Invalid value used in weak set


