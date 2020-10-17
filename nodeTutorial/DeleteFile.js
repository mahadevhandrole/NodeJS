var fs = require('fs');

fs.unlink('append.html',function(err){
    if(err) throw err;
    console.log("deleted");
});
