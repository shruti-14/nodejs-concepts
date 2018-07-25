 var fs = require('fs');

 fs.readFile('dummy_textfile.txt','utf8',function(err,data){
     console.log(data);
 });

 console.log("This will execute first even if it is written later in code because file reading is an async function.");

 //writing in a new file using async method

 fs.writeFile('writeAsyncWay.txt','Hi, I am doing by async way!');
