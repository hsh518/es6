let app=require('./export.js')
let default_=require('./default_export')
console.log(app.sum)// 6
console.log(app.arr)// [1,2,3]
default_();// default