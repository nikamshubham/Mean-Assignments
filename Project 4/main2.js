const http = require("http");


http.createServer(function (req, res) {

    res.writeHead(200, { "content-type": "text/html" })
    res.end("Are you with me!!!!");

}).listen(5050);