var http = require('http');
var fs= require('fs');

http.createServer(function(req,resp){

    fs.appendFile('./append.html','Welcome to edureka',function(err){
    if(err)
    {
       throw err; 
    }
    });
    console.log("saved");
}).listen(8080);
console.log("server started on localhost:8080");