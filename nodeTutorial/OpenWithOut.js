var fs = require('fs');

fs.open('NewFile.html','w',function(err){
    if(err){
        throw err;
    }
    console.log("saved");
});
