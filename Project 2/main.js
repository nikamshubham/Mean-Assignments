console.log("First line of main program");
//local module1 :: By using require we add that module
const mod1 = require("./src/module1");
//local module1
console.log(mod1);
console.log("PI = ", mod1.PI);

const mod2 = require("./src/module2");
//local module2 
console.log(mod2);

//importing (local module3) module3.js file to Reuse or access
const mod3 = require("./src/module3");
// console.log(mod3);
let add = mod3.addition(4, 5);
console.log("Addition =", add);
let sub = mod3.substraction(10, 5);
console.log("Substraction = ", sub);
let mul = mod3.multiplication(5, 2)
console.log("Multiplication = ", mul)
let div = mod3.division(5, 2)
console.log("Division = ", div)
