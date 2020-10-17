var fs = require('fs');

fs.readFile('test.txt',function(err,data){
    if(err){
        throw err;

    }
    setTimeout(()=>{
        console.log('Display after 2 seconds'),200
    });
});
console.log('starts here');
