var express = require('express');

var app = express();

app.get('/',function(req,res){
    res.send("Hii i am listening");
});
app.get('/contact',function(req,res){
    res.send("Contact page");
});

app.listen(4000);