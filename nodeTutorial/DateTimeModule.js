var http = require('http');
var dt = require('./myOwnModule');

http.createServer( function( req,resp){
    resp.writeHead(200,{'Content-Type':'text/html'});
    resp.write('today date and time is :'+dt.myDateTime());
    resp.end();
}).listen(8080);
