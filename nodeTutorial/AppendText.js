var fs= require('fs');

fs.appendFile('NewFileText.txt','Thank you!!!',function(err){
    if(err) throw err;
    console.log("appended");
});