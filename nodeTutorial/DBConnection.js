
var mysql = require('mysql');

var conn = mysql.createConnection({

    host:"localhost",
    user:"springstudent",
    password:"springstudent"
});

conn.connect(function(err){
    if(err) throw err;
    console.log("connected");

   conn.query("create database student",function(err,result){
       if(err) throw err;
       console.log("database created");
   });

});