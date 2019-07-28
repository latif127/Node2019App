var fs=require('fs');
fs.readFile('./files/message.txt', (err, data) => { 
    if (err)
        throw err;
        
console.log("Content : " + data); });