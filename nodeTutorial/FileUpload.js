var http = require('http');
var formidable = require('formidable');
var fs = require('fs');

http.createServer(function (req, resp) {
    if (req.url == '/fileupload') {
        var form = new formidable.IncomingForm();
        form.parse(req, function (err, fields, files) {
            //var oldpath = files.filetoupload.path;
            var oldpath = files.filetoupload.path;

            var newpath = 'c:/Users/Admin/nodeTutorial/'+ files.filetoupload.name;

            fs.rename(oldpath,newpath,function(err){
                if(err) throw err;
                console.log("file uploaded and moved");
                resp.end();
            })
     
        });
    }
    else {
        resp.writeHead(200, { 'Content-Type': 'text/html' });
        resp.write('<form action="fileupload" method="post" enctype="multipart/form-data">');
        resp.write('<input type="file" name="filetoupload"><br>');
        resp.write('<input type="submit">');
        resp.write('</form>');
        return resp.end();
    }
}).listen(8080);
console.log("server is running on the port:8080");
