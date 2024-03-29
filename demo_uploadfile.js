var http = require('http');
var formidable = require('formidable');
var fs = require("fs");

http.createServer(function(req, res) {
    if (req.url == '/fileupload') {
        var form = new formidable.IncomingForm();
        form.parse(req, function(err, fields, files) {
            oldPath = files.filetoupload.path;
            newPath = "C:/JSBootcamp/Week7/" + files.filetoupload.name;
            fs.rename(oldPath, newPath, function(err) {
                if (err) throw err;
            })
            res.writeHead(200, { 'Content-Type': 'text/html' });
            res.write('<img src=' + files.filetoupload.name + '>');
            res.write('File uploaded and moved');
            res.end();
        });
    } else {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.write('<form action="fileupload" method="post" enctype="multipart/form-data">');
        res.write('<input type="file" name="filetoupload"><br>');
        res.write('<input type="submit">');
        res.write('</form>');
        return res.end();
    }
}).listen(8080);