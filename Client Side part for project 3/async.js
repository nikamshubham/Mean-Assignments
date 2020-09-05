let a = 10;
let b = 20;
let c = 30;
console.log("A = ", a);
console.log("B = ", b);
// setTimeout(() => {
//     console.log("inside C = ", c);
// }, 2000);
setInterval(() => {
    console.log("Outside C = ", c);
}, 2000);
console.log("Outside C = ", c);