var http= require('http');
var fs = require('fs');

var server= http.createServer(function(request,response){
console.log(request.url);
    if (request.url === "/home" || request.url==="/"){
       
        response.writeHead(200,{"Content-Type":"text/html"});
        var readStream = fs.createReadStream(__dirname + '/index.html','utf8');    
        readStream.pipe(response);
    }
    else if (request.url=== "/contact"){
        response.writeHead(200,{"Content-Type":"text/html"});
        var readStream = fs.createReadStream(__dirname + '/contact.html','utf8');    
        readStream.pipe(response);
    }
    else if (request.url=== "/api/details"){
        response.writeHead(200,{"Content-Type":"application/json"});
        var jsonObj= {
            name : "abc",
            age: 30,
            gender: "female"
        };
        response.end(JSON.stringify(jsonObj));
    }
    else{
        response.writeHead(200,{"Content-Type":"text/html"});
        var readStream = fs.createReadStream(__dirname + '/404.html','utf8');    
        readStream.pipe(response);
    }

})

server.listen(7000);
