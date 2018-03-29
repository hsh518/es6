// Array.of方法
// let arr=new Array(10);
// console.log(arr)// [ <10 empty items> ]
// console.log(arr.length);// 10
// let arr2=Array.of(10);
// console.log(arr2);// [10]

// Array.from
// let arr=Array.of(1,2);
// let arr2=Array.from(arr);
// let arr3=arr;
// console.log(arr2);// [1,2]
// console.log(arr3);
// arr.push(3);
// console.log(arr2);// [1,2]
// console.log(arr3);// [1,2,3]
//映射转换
// let arr=Array.of(1,2);
// let arrcopy=Array.from(arr,value=>value*2);
// console.log(arrcopy);// [2,4]
//Array.from第三个参数提供this指向
// let arr=Array.of(1,2);
// let obj={
//   num:2,
//   add(value){
//     return value+=this.num;
//   }
// }
// let arr2=Array.from(arr,obj.add,obj);
// console.log(arr2);// [3,4]

//find,findIndex
// let arr=[1,2,3,4,5]
// console.log(arr.find(n=>n>2));// 3
// console.log(arr.findIndex(n=>n>2));// 2

//fill
// let arr=[1,2,3,4,6]
// arr.fill(5);
// console.log(arr);// [ 5, 5, 5, 5, 5 ]
// arr.fill(8,3);
// console.log(arr);// [ 1, 2, 3, 8, 8 ]
// arr.fill(9,1,3);
// console.log(arr);// [ 1, 9, 9, 4, 6 ]

//copyWithin(x:开始粘贴的位置,y:开始复制的位置,z:停止复制的位置)
// let arr=[1,2,3,4,5,6,7,8,9]
// arr.copyWithin(1,3);
// console.log(arr);// [ 1, 4, 5, 6, 7, 8, 9, 8, 9 ]
// arr.copyWithin(1,2,4)// [ 1, 3, 4, 4, 5, 6, 7, 8, 9 ]
// console.log(arr);