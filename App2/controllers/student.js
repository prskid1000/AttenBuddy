exports.firstYear= (req, res, next) => {
    var Model=require('../models/course');
    Model.find({year:"1"},function(err, docs) {
    if( err || !docs) {
        console.log("Error in retrieving courses");
        res.redirect('/');
    } else {            
        console.log("Courses retrieved");
        res.render('pages/firstYear',{course: docs,userid:req.cookies.userid,batch:req.cookies.batch});
        next();
    }
    });
};

exports.secondYear= (req, res, next) => {
    var Model=require('../models/course');
    Model.find({year:"2"},function(err, docs) {
    if( err || !docs) {
        console.log("Error in retrieving courses");
        res.redirect('/');
    } else {            
        console.log("Courses retrieved");
        res.render('pages/secondYear',{course: docs,userid:req.cookies.userid,batch:req.cookies.batch});
        next();
    }
    });
};

exports.thirdYear= (req, res, next) => {
    var Model=require('../models/course');
    Model.find({year:"3"},function(err, docs) {
    if( err || !docs) {
        console.log("Error in retrieving courses");
        res.redirect('/');
    } else {            
        console.log("Courses retrieved");
        res.render('pages/thirdYear',{course: docs,userid:req.cookies.userid,batch:req.cookies.batch});
        next();
    }
    });
};

exports.fourthYear= (req, res, next) => {
    var Model=require('../models/course');
    Model.find({year:"4"},function(err, docs) {
    if( err || !docs) {
        console.log("Error in retrieving courses");
        res.redirect('/');
    } else {            
        console.log("Courses retrieved");
        res.render('pages/fourthYear',{course: docs,userid:req.cookies.userid,batch:req.cookies.batch});
        next();
    }
    });
};

exports.viewAttendance= (req,res,next) => {
    var date=[];
    var ndate=[];
    var Model=require('../models/attendance');
    Model.find({course:req.body.course,batch:req.body.batch,attend:req.body.userid},function(err, docs) {
    if( err || !docs) {
        console.log("Error in retrieving attendance");
        res.redirect('/');
    } else {      
        console.log("Attendance retrieved");
        docs.forEach(element => date.push(element['date']));
        
        var Model1=require('../models/attendance');
        Model1.find({course:req.body.course,batch:req.body.batch,attend:{$ne:req.body.userid}},function(err, docs) {
        if( err || !docs) {
        console.log("Error in retrieving attendance");
        res.redirect('/');
        } else {            
        console.log("Attendance retrieved");
        docs.forEach(element => ndate.push(element['date']));
        console.log(ndate);
        res.render('pages/attendanceView',{date:date,ndate:ndate});
        next();
    }
    });
    }
    });
}
