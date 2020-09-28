var express = require('express');
var app = express();

const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));

var cookieParser = require('cookie-parser');
app.use(cookieParser());

const control=require('./controllers/control');
const teacher=require('./controllers/teacher');
const student=require('./controllers/student');
const admin=require('./controllers/admin');

app.set('view engine', 'ejs');

app.get('/',control.base);
app.post('/login',control.connectDB,control.loginHub);
app.get('/logout',control.isAuth,control.logOut);
app.get('/about',control.about_us);
app.get('/studentHub',control.isAuth,control.studentHub);
app.get('/adminHub',control.isAuth,control.adminHub);
app.get('/teacherHub',control.isAuth,control.teacherHub);

app.get('/manageCourse',control.isAuth,admin.manageCourse);
app.get('/manageTeacher',control.isAuth,admin.manageTeacher);
app.get('/manageStudent',control.isAuth,admin.manageStudent);

app.get('/firstYear',control.isAuth,student.firstYear);
app.get('/secondYear',control.isAuth,student.secondYear);
app.get('/thirdYear',control.isAuth,student.thirdYear);
app.get('/fourthYear',control.isAuth,student.fourthYear);

app.get('/takeAttendance',control.isAuth,teacher.takeAttendance);
app.get('/reviewModifyAttendance',control.isAuth,teacher.reviewModifyAttendance);

app.post('/viewAttendance',control.isAuth,student.viewAttendance);

app.post('/takeAttendanceSheet',control.isAuth,teacher.takeAttendanceSheet);
app.post('/reviewModifyAttendanceSheet',control.isAuth,teacher.reviewModifyAttendanceSheet);

app.post('/save',control.isAuth,teacher.save);
app.post('/modify',control.isAuth,teacher.modify);

app.post('/addCourse',control.isAuth,admin.addCourse);
app.post('/addTeacher',control.isAuth,admin.addTeacher);
app.post('/addStudent',control.isAuth,admin.addStudent);

app.post('/deleteCourse',control.isAuth,admin.deleteCourse);
app.post('/deleteTeacher',control.isAuth,admin.deleteTeacher);
app.post('/deleteStudent',control.isAuth,admin.deleteStudent);

app.listen(8060);
console.log('AttenBuddy Started');
