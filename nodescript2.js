var http=require('http');

var host="localhost"; //'127.0.0.1' , IPv4 255.255.255. (Subnet Mask)/192.168.1.1
var port = 3000;

var server=http.createServer(function(req, res){
    res.writeHead(200, {'Content-Type':'text/plain'});
    console.log('Server is running');
    res.end('Response from the NodeJS developer script');
});

server.listen(port, host, function(err){
    if(err)
        return console.log('Error Occured', err);
    
    console.log('Server is running on port 3000');
});