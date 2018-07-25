var fs = require('fs');

var streamReader = fs.createReadStream(__dirname + '/streamFile.txt','utf8');

streamReader.on('data',function(chunk){
    console.log("<--------------new chunk received:---------------->");
    console.log(chunk);
})