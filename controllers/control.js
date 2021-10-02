exports.about_us= (req, res, next) => {
    res.render('pages/about');
    next();
};

exports.base= (req, res, next) => {
    res.render('pages/index');
    next();
};

exports.isAuth= (req, res, next) => {
    var Model=require('../models/user');
    Model.findOne({ password: req.cookies.password, userid: req.cookies.userid},function(err, docs) {
    if( err || !docs) {
        console.log("No User found");
        res.redirect('/');
    } else {            
        console.log("User found");
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
    res.clearCookie('batch');
    console.log("User Logged Out");
    res.render('pages/index');
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
        res.cookie('batch', docs.batch, {expire:400000+Date.now()});
        if(docs.level==='student')res.redirect('/studentHub',);
        if(docs.level==='admin')res.redirect('/adminHub');
        if(docs.level==='teacher')res.redirect('/teacherHub');
    }
    });
};
