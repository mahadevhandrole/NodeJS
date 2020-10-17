var http = require('http');
var fs = require('fs');

http.createServer(function(req,resp){

    fs.open('./append.html','w',function(err,file){
        if(err)
        {
            throw err;
        }
        console.log('saved');
    });
}).listen(8080);