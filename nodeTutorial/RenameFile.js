var fs = require('fs');

fs.rename('NewFile.html','NewRenamedFile.txt',function(err){
    if(err) throw err;
    console.log('Renamed');
});
