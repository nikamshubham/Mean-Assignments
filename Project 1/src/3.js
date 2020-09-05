class main {
    static addition(x, y) {
        return x + y;
    }
    substraction(x, y) {
        return x - y;
    }
    multiplication(x, y) {
        return x * y;
    }
}

let add = main.addition(10, 5);
console.log(add);
let obj = new main;
let sub = obj.substraction(10, 5);
console.log(sub);
let mul = obj.multiplication(10, 2);
console.log(mul);