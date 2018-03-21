//块级作用域
function scope(value){
    if(value){
        let name="kant";
        return name;
    } else {
        console.log(name);//报错，未定义name
    }
}
// scope(false);


//暂时性死区
function dead_zone(){
    console.log(typeof(value));//undefind
    if (true) {
        console.log(typeof(value));//报错 value is not defind
        let value=1;
    }
}
// dead_zone();

//循环中的块级绑定
function loop() {
    for (var i = 0; i<5; i++){

    }
    console.log(i)// 5
     for (let j = 0; j<5; j++){

    }
    console.log(j)// j is not defind
}
// loop();

//循环内的函数
 function loop_fun(){
     for(var i=0;i<10;i++){
        setTimeout(function(){
            console.log(i)//10 10 10.....
        },0)
     }
     for(let i=0;i<10;i++){
        setTimeout(function(){
            console.log(i)//0 1 2 3......
        },0)
     }
 }
//  loop_fun();