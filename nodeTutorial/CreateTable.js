
var mysql = require('mysql');

var conn = mysql.createConnection({
    host:"localhost",
    user:"springstudent",
    password :"springstudent",
    database:"student"
});

conn.connect(function(err){
    if(err) throw err;
   console.log("Connected");

   var sql="create table student(name varchar(100),address varchar(200))";

   conn.query(sql,function(err,result){
       if(err) throw err;
       console.log("table created");
   });
});