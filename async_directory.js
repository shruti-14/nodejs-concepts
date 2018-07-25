
var fs = require('fs');

fs.mkdir('async_demo',function(){
    fs.readFile('dummy_textfile.txt','utf8',function(err,data){
        fs.writeFile('./async_demo/async_textfile.txt',data);
    });
});

// In order to remove any directory we need to first delete all the files in it
//  fs.unlink('./async_demo/async_textfile.txt',function(){
//      fs.rmdir('async_demo');
//  });