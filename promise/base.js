// 创建promise
// function createPromise(bool){
//     return new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         if (bool) {
//             resolve(1);
//         }else{
//             reject('bool is false')
//         }
//     },1000)
//     })
// }
// let promise=createPromise(false);// 成功还是错误
// promise.then((res)=>{
//     console.log(res);// 1
// }).catch((err)=>{
//     throw(new Error(err)); // Error: bool is false
// })

// 执行队列 执行顺序 1 3 2
// let promise=new Promise((resolve)=>{
//     console.log('1');
//     resolve();
// })
// promise.then(()=>{
//     console.log('2');
// })
// console.log('3');

//创建已决的promise
// let promise=Promise.resolve(1);
// promise.then((res)=>{
//     console.log(res);// 1
// })
// promise=Promise.reject('err');
// promise.catch((err)=>{
//     throw(err);// err
// })

// 非promise的Thenable
// let thenable={
//     then(resolve,reject){
//         resolve(1)
//     }
// }
// let promise=Promise.resolve(thenable);
// promise.then((res)=>{
//     console.log(res);// 1
// })

//执行器错误
// let promise=new Promise((relove,reject)=>{
//     throw new Error('err');
// })
// promise.catch((err)=>{
//     console.log(err.message);// err
// })