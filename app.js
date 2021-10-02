var mongoose = require('mongoose');
var mongoDB = 'mongodb+srv://prskid1000:nIELmPiB3vZ4YkWQ@cluster0-qxsqv.mongodb.net/test?retryWrites=true&w=majority';

mongoose.connect(mongoDB, { useNewUrlParser: true });
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB Connection Error'));
db.on('open', console.error.bind(console, 'MongoDB Connected Succesfully'));

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

const controlb = require('./controllers/controlb');
const teacherb = require('./controllers/teacherb');
const studentb = require('./controllers/studentb');
const adminb = require('./controllers/adminb');

app.set('view engine', 'ejs');

app.get('/',control.base);
app.post('/login',control.loginHub);
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


//Android-Desktop Backend
app.post('/isauth', controlb.isAuth)

app.post('/add_course', adminb.addCourse);
app.post('/add_teacher', adminb.addTeacher);
app.post('/add_student', adminb.addStudent);

app.get('/getcourse', adminb.manageCourse);
app.get('/getteacher', adminb.manageTeacher);
app.get('/getstudent', adminb.manageStudent);


app.post('/delete_course', adminb.deleteCourse);
app.post('/delete_teacher', adminb.deleteTeacher);
app.post('/delete_student', adminb.deleteStudent);

app.post('/view_attendance', studentb.viewAttendance);

app.post('/getsheet', teacherb.getSheet);
app.post('/savesheet', teacherb.saveSheet);
app.post('/modifysheet', teacherb.modifySheet);

app.listen(process.env.PORT || 3000,
    () => console.log("Server is running..."));
