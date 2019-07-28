var http=require('http');
var fs=require('fs');

var host="localhost"; //'127.0.0.1'
var port = process.env.port || 3000;

var server=http.createServer((req, res)=>{
    res.writeHead(200, {'Content-Type':'application/pdf'});
    fs.readFile('/Users/latif/Documents/JavaScript.pdf', (err, data)=>{
        if(err){
            //throw err;
            res.JSON({'status':'error', 'msg':err})
        }else{
            console.log('Server is running');
            res.write(data);
        }
        res.end();
    });
});

var msg='Node Server is running on port';
server.listen(port, host, function(err){
    if(err)
        return console.log('Error Occured', err);
    
    console.log(`${msg} ${port}`);
});