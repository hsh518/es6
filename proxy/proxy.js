//创建一个简单代理
// let target={};
// let proxy=new Proxy(target,{});
// proxy.name='kant';
// console.log(target.name);// kant
// target.name='jone';
// console.log(proxy.name)// jone

// 使用set陷阱函数验证属性值
// let target={
//     name:'kant'
// }
// let proxy=new Proxy(target,{set(trapTarget,key,value,receiver){
//     if (!trapTarget.hasOwnProperty(key)) {
//         if (isNaN(value)) {
//             throw new Error('value is not number');
//         }
//     }
//     return Reflect.set(trapTarget,key,value,receiver);
// }})
// proxy.num='num';

//使用get陷阱函数进行对象外形验证
// let target={a:1};
// let proxy=new Proxy(target,{get(trapTarget,key,receiver){
//     if (!trapTarget.hasOwnProperty(key)) {
//         throw new Error(key+' is not defind')
//     }
//     return Reflect.get(trapTarget,key,receiver)
// }})
// console.log(proxy.b)// Error: b js not defind

//使用has陷阱函数隐藏属性
// let target={value:'value',num:1}
// let proxy=new Proxy(target,{has(trapTarget,key){
//     if (key==='value') {
//         return false;
//     }
//     return Reflect(trapTarget,key);
// }})
// console.log('value' in proxy);// false

//使用deleteProperty陷阱函数避免属性被删除
// let target={value:1};
// let proxy=new Proxy(target,{deleteProperty(trapTarget,key){
//     if (key==='value') {
//         throw new Error(key+' not delete')
//     }
// }})
// delete proxy.value;// value not delete

//原型代理陷阱函数
let target={};
let proxy=new Proxy(target,{getPrototypeOf(trapTarget){
    return null;
},setPrototypeOf(trapTarget,proto){
    return false
}
})
let targetProto=Object.getPrototypeOf(proxy);
console.log(targetProto);// null
Object.setPrototypeOf(proxy,{})//  'setPrototypeOf' on proxy: trap returned falsish