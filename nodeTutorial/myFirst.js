var http = require('http');

http.createServer(function(req,resp){
resp.writeHead(200,{'Content-Type':'text/html'});
resp.end('hello node js learning');
}).listen('8080');
