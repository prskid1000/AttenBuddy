var express = require('express');
var app = express();

const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));

var cookieParser = require('cookie-parser');
app.use(cookieParser());

const control=require('./controllers/control');

app.set('view engine', 'ejs');

app.get('/',control.base);
app.post('/login',control.connectDB,control.loginHub);
app.get('/about',control.about_us);
app.get('/studentHub',control.isAuth,control.studentHub);
app.get('/adminHub',control.isAuth,control.adminHub);
app.get('/teacherHub',control.isAuth,control.teacherHub);

app.listen(8060);
console.log('8081 is the magic port');
