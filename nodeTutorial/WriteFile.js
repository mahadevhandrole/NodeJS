var fs = require('fs');

fs.writeFile('NewFileText.txt','replaced, new data',function(err){
    if(err) throw err;
    console.log("replaced");
});