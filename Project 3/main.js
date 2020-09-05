let mod = require("./src/module1");
//console.log(mod);
//console.log(mod.list[0].city);

const http = require("http");
http.createServer((req, res) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    const myResponse = JSON.stringify(mod.list);
    res.end(myResponse);
    //console.log(mod.list);
}).listen(5600);

// http://localhost:5600/