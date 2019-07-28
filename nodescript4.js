var http=require('http');
var fs=require('fs');

var host="localhost"; //'127.0.0.1'
var port = 3000;

var server=http.createServer(function(req, res){
    res.writeHead(200, {'Content-Type':'text/html'});
    fs.readFile('index.html', function(err, data){
        if(err){
            throw err;
        }
        console.log('Server is running');
        res.end(data);
    });
});

var msg='Node Server is running on port';
server.listen(port, host, function(err){
    if(err)
        return console.log('Error Occured', err);
    
    console.log(`${msg} ${port}`);
});