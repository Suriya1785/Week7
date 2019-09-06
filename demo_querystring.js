var http = require('http');
//built-in modules to easily split the query string into readable parts, such as the URL module
var url = require('url');

http.createServer(function(req, res) {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    var q = url.parse(req.url, true).query;
    var txt = q.year + " " + q.month;
    res.end(txt);
}).listen(8080);