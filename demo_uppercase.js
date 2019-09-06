//Example of package installation through npm
let uc = require("upper-case");
let http = require("http");
http.createServer(function(req, res) {

    try {
        res.writeHead(200, { "Content-type": "text/html" });
        res.write(uc("Hello World"));
        res.end();
    } catch (e) {
        console.log(e);
    }

}).listen(8080);