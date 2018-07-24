var http= require('http');

var server= http.createServer(function(request,response){
    response.writeHead(200,{"Content-Type":"text/plain"});
    response.end("This fihghle isen watched by gulp task\n");

})

server.listen(9000);
var timer= require('./global');