var http=require('http');
var fs=require('fs');

let video_file='/Users/latif/Downloads/Last Christmas Official Video.mp4';

var host="localhost"; //'127.0.0.1'
var port = process.env.port || 3000;

var server=http.createServer((req, res)=>{
    res.writeHead(200, {'Content-Type':'video/mp4'});
    
    fs.exists(video_file, (exists)=>{
        if(exists){
            let vReadStream=fs.createReadStream(video_file);
            vReadStream.pipe(res);
        }else{
            res.end('It is 404 error');
        }
    });
});

var msg='Node Server is running on port';
server.listen(port, host, function(err){
    if(err)
        return console.log('Error Occured', err);
    
    console.log(`${msg} ${port}`);
});