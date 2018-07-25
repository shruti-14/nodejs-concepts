
var fs = require('fs');
//it is a sync call so it will allow the further code to execute only when the file reading is completed 
var fileContents= fs.readFileSync('./dummy_textfile.txt','utf8');

console.log(fileContents);

//writing contents in a new file

fs.writeFileSync('write_textfile.txt',fileContents);

//how to delete a file using fs

//fs.unlink("filename.txt");
