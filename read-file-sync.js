var fs = require('fs');
var contents = fs.readFileSync('./files/message.txt', 'utf8'); 

console.log(contents);