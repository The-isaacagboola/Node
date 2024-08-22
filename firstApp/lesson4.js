const fs = require('fs');

const files = fs.readdirSync('./');
// console.log(files)

// they take a second fn - callback that run immediatelt the files are found, somewhat like an error handling Function
fs.readdir('./', function(err, files){
    if (err) console.log("Erroe", err);
    else console.log('Result',  files)

})



