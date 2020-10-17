
// var http = require('http');
// var nodemailer= require('nodemailer');


// http.createServer(function(req,resp){

//     resp.writeHead(200,{'Content-Type':'text/plai'});


// var transport=nodemailer.createTransport({
//     service:'gmail',
//     host:'smtp.gmail.com',
//     secure:false,
//     dubug:true,
//     auth:{
//         user:'mahadevhandrole78@gmail.com',
//         pass:'basappahandrole@22'
//     }
// });

// var mailOptions =  {
//     from : 'mahadevhandrole78@gmail.com',
//     to : 'savitahandrole93@gmail.com',
//     subject : 'sending email through nodeJS',
//     text : 'welcome new india'
// };

// transport.sendMail(mailOptions,function(err,info){
//     if(err) 
//     {
//         console.log(err);
//     }
//     else{
//         console.log('Email sent:'+info.response);
//     }

// });
// }).listen(8080);

var http = require('http');
var nodemailer = require('nodemailer');
http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/plain'});

  var fromEmail = 'mahadevhandrole78@gmail.com';
  var toEmail = 'savitahandrole93@gmail.com';

  var transporter = nodemailer.createTransport({
    host: 'gmail',
    port: 587,
    secure: false, // use SSL
    debug: true,
      auth: {
        user: 'mahadevhandrole78@gmail.com',
        pass: 'basappahandrole@22'
      }
  });
   transporter.sendMail({
      from: fromEmail,
      to: toEmail,
      subject: 'Regarding forget password request',
      text: 'This is forget password response from your app',
      html: '<p>Your password is <b>sample</b></p>'
  }, function(error, response){
      if(error){
          console.log('Failed in sending mail');
          console.dir({success: false, existing: false, sendError: true});
          console.dir(error);
          res.end('Failed in sending mail');
      }else{
          console.log('Successful in sending email');
          console.dir({success: true, existing: false, sendError: false});
          console.dir(response);
          res.end('Successful in sending email');
      }
  });
}).listen(8000);
console.log('Server listening on port 8000');