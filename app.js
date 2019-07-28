let http = require('http');
let fs = require('fs');
let path = require('path');

let host="localhost"; //'127.0.0.1'
let port = 3000;

http.createServer(function (req, res) {
    console.log('request ', req.url);

    let filePath = '.' + req.url;
    if (filePath == './') {
        filePath = './index.html';
    }

    let extname = String(path.extname(filePath)).toLowerCase();
    let mimeTypes = {
        '.html': 'text/html',
        '.js': 'text/javascript',
        '.css': 'text/css'
    };

    let contentType = mimeTypes[extname] || 'application/octet-stream';

    fs.readFile(filePath, function(err, content) {
        if (err) {
            //throw err.message;
            if(err.code == 'ENOENT') {
                fs.readFile('./404.html', function(err, content) {
                    res.writeHead(404, { 'Content-Type': contentType });
                    res.end(content, 'utf-8');
                });
            }
            else {
                res.writeHead(500);
                res.end('Sorry, check with the site admin for error: '+err.code+' ..\n');
            }
        }
        else {
            res.writeHead(200, { 'Content-Type': contentType });
            res.end(content, 'utf-8');
        }
    });

}).listen(port, host, (err)=>{
    if(err)
        return console.log('Error Occured', err);
    
    console.log(`Server is running on port ${port}`);
});