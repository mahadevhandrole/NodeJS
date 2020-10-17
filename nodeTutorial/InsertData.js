
var mysql = require('mysql');

var conn = mysql.createConnection({
    host:"localhost",
    user:"springstudent",
    password:"springstudent",
    database:"student"
});

conn.connect(function(err){
    if(err) throw err;
    console.log("connected");

    //var sql="insert into student(name,address) value('dummy','pune')";
     //var sql="select * from student";
     //var sql =" select * from student where address='pune'";
     //var sql = "delete from student where name='dummy'";
     var sql = " update student set name='durgasoftware' where address='hyderbad'";
    conn.query(sql,function(err,result){
        if(err) throw err;

        console.log("deleted");
    });
});