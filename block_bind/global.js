//node运行无window对象 window is not defined
var RegExp="kant";
console.log(RegExp);//kant
console.log(window.RegExp===RegExp);//true

let RegExp="kant";//需注释上次声明 Identifier 'RegExp' has already been declared
console.log(RegExp);//kant
console.log(window.RegExp===RegExp);//false