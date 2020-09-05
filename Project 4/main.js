// importing local module
let jsonfile = require('./src/jsonDoc');
//console.log(jsonfile);
//importing internal module
const http = require('http');
http.createServer((req, res) => {
    //CORS enable
    res.setHeader("Access-Control-Allow-Origin", "*");
    const data = JSON.stringify(jsonfile);
    res.end(data);
}).listen(5850);