//promise.all();
let p1=new Promise((reslove,reject)=>{
    reslove(1)
})
let p2=new Promise((reslove,reject)=>{
    reslove(2)
})
let p3=new Promise((reslove,reject)=>{
    reslove(3)
})
// let promise=Promise.all([p1,p2,p3]);
// promise.then((value)=>{
//     console.log(value);
// })
//promise.race();
let promise=Promise.race([p1,p2,p3]);
promise.then((res)=>{
    console.log(res);// 1
})

