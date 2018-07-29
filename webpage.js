var http= require('http');
var fs = require('fs');

var server= http.createServer(function(request,response){
    response.writeHead(200,{"Content-Type":"text/html"});
    var readStream = fs.createReadStream(__dirname + '/index.html','utf8');

    readStream.pipe(response);

    //response.end("This fihghle isen watched by gulp task\n");

})

server.listen(7000);
