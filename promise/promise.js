// node下全局拒绝处理
// unhandledRejection:本次事件循环未调用错误函数
// let promise;
// process.on("unhandledRejection",(reason,promise)=>{
//     console.log(reason.message);
// })
// promise=Promise.reject(new Error('err'))// err
// rejectionHandled：一个事件循环后调用错误函数
// let promise;
// process.on("rejectionHandled",(promise)=>{
//     console.log('process');
//     promise.catch((err)=>{
//         console.log(err.message);
//     })
// })
// promise=Promise.reject(new Error('err'))// err
// setTimeout(()=>{
//     promise.catch((err)=>{
//         console.log('函数错误调用')
//     });
// },0)

//浏览器下全局拒绝处理
// let promise;
// window.onunhandledrejction=function(event){
//     console.log(event.type);
//     console.log(event.reason.message);
//     console.log(event.promise);
// }

//promise链
// let promise=new Promise((reslove,reject)=>{
//     reslove(1);
// })
// promise.then((res)=>{
//     console.log(res);// 1
//     return ++res;
// }).then((res)=>{
//     console.log(res);// 2
//     throw new Error('err');
// }).catch((err)=>{
//     console.log(err.message);// err
// })

//传递prpmise对象
// let p1=new Promise((reslove,reject)=>{
//     reslove(1);
// })
// let p2=new Promise((reslove,reject)=>{
//     reslove(2);
// })
// p1.then((res)=>{
//     console.log(res);// 1
//     return p2;
// }).then((res)=>{
//     console.log(res);// 2
// })