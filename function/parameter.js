//剩余参数
function surplus(obj,...keys){// ...keys后不能再有参数
    let newobj=Object.create(null);
    for(let i=0;i<keys.length;i++){
        newobj[keys[i]]=obj[keys[i]];
    }
    console.log(newobj);
}
// surplus({a:1,b:2,c:3},'a','b','c');// {a:1,b:2,c:3}

//函数构造器
// let func=new Function("...keys","return keys[0]+keys[1]");
// console.log(func(1,2));// 3

//扩展运算符
// let arr_keys=[1,2,3,4,5];
// console.log(Math.max(...arr_keys,4));// 5