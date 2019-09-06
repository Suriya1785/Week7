var http = require('http');
var dt = require('./myfirstmodule');

//create a server object
http.createServer(function(req, res) {
    res.writeHead(200, { 'Content-Type': 'text/html' }); //write a response to the client
    res.write("The date and time are currently: " + dt.myDateTime()); //end the response
    res.end();
}).listen(8080); // server object listens to port 8080