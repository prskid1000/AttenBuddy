var mongoose = require('mongoose');
var mongoDB = 'mongodb+srv://prskid1000:HATSoff@2018@cluster0-qxsqv.mongodb.net/test?retryWrites=true&w=majority';


exports.about_us= (req, res, next) => {
    res.render('pages/about');
    next();
};

exports.base= (req, res, next) => {
    res.render('pages/index');
    next();
};

exports.connectDB= (req, res, next) => {
    mongoose.connect(mongoDB, { useNewUrlParser: true });
    var db = mongoose.connection;
    db.on('error', console.error.bind(console, 'MongoDB Connection Error'));
    db.on('open', console.error.bind(console, 'MongoDB Connected Succesfully'))
    .then(next());
};

exports.isAuth= (req, res, next) => {
    var Model=require('../models/user');
    Model.findOne({ password: req.cookies.password, userid: req.cookies.userid},function(err, docs) {
    if( err || !docs) {
        console.log("No User found");
        res.redirect('/');
    } else {            
        console.log("User found");
        console.log(docs);
        next();
    }
    });
};

exports.adminHub=(req, res, next) => {
    res.render('pages/admin');
}

exports.studentHub=(req, res, next) => {
    res.render('pages/student');
}

exports.teacherHub=(req, res, next) => {
    res.render('pages/teacher');
}

exports.logOut=(req, res, next) => {
    res.clearCookie('userid'); 
    res.clearCookie('password');
    res.clearCookie('level');
    console.log("User Logged Out");
    res.render('/');
}


exports.loginHub=(req, res, next) => {
    var Model=require('../models/user');
    Model.findOne({ password: req.body.password, userid: req.body.userid},function(err, docs) {
    if( err || !docs) {
        console.log("No User found");
        res.redirect('/');
    } else {            
        console.log("User Logged In");
        res.cookie('userid', docs.userid, {expire:400000+Date.now()});
        res.cookie('password', docs.password, {expire:400000+Date.now()});
        res.cookie('level', docs.level, {expire:400000+Date.now()});
        if(docs.level==='student')res.redirect('/studentHub',);
        if(docs.level==='admin')res.redirect('/adminHub');
        if(docs.level==='teacher')res.redirect('/teacherHub');
    }
    });
};
