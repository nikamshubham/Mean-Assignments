let add = (n1, n2) => {
    try {
        return n1 + n2;
    } catch (error) {
        console.log("Exception occures", error);
    }
}

let sub = (n1, n2) => {
    return n1 - n2;
}

let mul = (n1, n2) => {
    return n1 * n2;
}

let div = (n1, n2) => {
    // if (n2 == 0) {
    //     console.log("Divide by zero error");
    // } else {
    //     return n1 / n2;
    // }
    try {
        return n1 / n2;
    } catch (err) {
        console.log("error occures", err);
    }
}

module.exports = { add, sub, mul, div }

