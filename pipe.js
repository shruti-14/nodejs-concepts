var http= require('http');
var fs = require('fs');

var server= http.createServer(function(request,response){
    response.writeHead(200,{"Content-Type":"text/plain"});
    var readStream = fs.createReadStream(__dirname + '/streamFile.txt','utf8');

    readStream.pipe(response);

    //response.end("This fihghle isen watched by gulp task\n");

})

server.listen(9000);
