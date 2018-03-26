//任务运行器
// function run(taskDef){
//     let task=taskDef();
//     let result=task.next();
//     function step(){
//         if (!result.done) {
//             result=task.next();
//             step();
//         }else{
//             console.log('over');
//         }
//     }
//     step(result)
// }
// run(function *(){
//     console.log(1);
//     yield 1;
//     console.log(2);
//     yield 2;
// })

function san(cell){
    for(let i=1;i<=cell;i++){
        clum(i,cell)
    }
}
function clum(i,cell){
    let arr=[];
    arr.push(" ");
    for(let k=0;k<cell-i;k++){
        arr.push(" ");
    }
    let s=1;
    arr.push(s);
    arr.push(" ");
    for(let j=1;j<i;j++){
        s=s*(i-j)/j;
        arr.push(s);
        arr.push(' ');
    }
    for(let k=0;k<cell-i;k++){
        arr.push(" ");
    }

    console.log(...arr);
}
san(6);