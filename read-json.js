var http=require('http');
var fs=require('fs');

var host="localhost"; //'127.0.0.1'
var port = process.env.port || 3000;

var server=http.createServer((req, res)=>{
    res.writeHead(200, {'Content-Type':'application/json'});

    let json_response={
        status: 200,
        message: 'successful',
        result:['January', 'February', 'March', 'April', 'May', 'June'],
        code: 200
    };

    console.log('Server is running');
    res.write(JSON.stringify(json_response));

    res.end();
});

var msg='Node Server is running on port';
server.listen(port, host, function(err){
    if(err)
        return console.log('Error Occured', err);
    
    console.log(`${msg} ${port}`);
});