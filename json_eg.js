var http= require('http');
var fs = require('fs');

var server= http.createServer(function(request,response){
    response.writeHead(200,{"Content-Type":"application/json"});
    var jsonObj= {
        name : "abc",
        age: 30,
        gender: "female"
    };
    response.end(JSON.stringify(jsonObj));

})

server.listen(7000);
