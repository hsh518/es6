// class person{
//   constructor(name){
//     this.name=name;
//   }
//   sayName(){
//     console.log(this.name);
//   }
// }
// let kant=new person('kant');
// kant.sayName();// kant

//继承
// class rectanle{
//   constructor(lenght,width){
//     this.lenght=lenght;
//     this.width=width;
//   }
//   getArea(){
//     return this.lenght*this.width;
//   }
// }
// class Square extends rectanle{
// }
// let square=new Square(3,2);
// console.log(square.getArea());// 6
//屏蔽类方法
// class Square extends rectanle{
//   getArea(){
//     return this.lenght+this.width;
//   }
// }
// let square=new Square(3,2);
// console.log(square.getArea());// 5

//从表达式中派生类
// function rectanle(lenght,width){
//   this.lenght=lenght;
//   this.width=width;
// }
// rectanle.prototype.getArea=function(){
//   return this.lenght*this.width;
// }
// class Square extends rectanle{

// }
// let square=new Square(3,2);
// console.log(square.getArea());// 6

//继承内置对象
// class myArray extends Array{};
// let myarr=myArray.of(1,2);
// console.log(myarr);// myArray [ 1, 2 ]

