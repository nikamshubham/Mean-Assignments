const http = require("http");

http.createServer(function (req, res) {
    res.write("hello Everyone");
    res.end();
}).listen(8080);