var http = require('http');
var fs = require('fs');

http.createServer(function(req,resp){

    fs.readFile('./ReadPage.html',function(err,data){
        resp.writeHead(200,{'Content-Type':'text/html'});
        resp.write(data);
        return resp.end();
    });
}).listen(8080);
