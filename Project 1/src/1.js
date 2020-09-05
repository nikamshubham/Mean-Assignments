let miss = () => {
    for (var i = 0; i < 4; i++) {
        console.log("I miss you aish");
    }
}

setInterval(() => {
    console.log("In set interval of 2 sec", new Date);
}, 2000);

miss();
clearInterval();