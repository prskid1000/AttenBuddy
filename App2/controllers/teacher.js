exports.takeAttendance= (req, res, next) => {
    var Model=require('../models/course');
    Model.find({teacher:req.cookies.userid},function(err, docs) {
    if( err || !docs) {
        console.log("Error in retrieving courses");
        res.redirect('/');
    } else {            
        console.log("Courses retrieved");
        res.render('pages/takeAttendance',{course: docs});
        next();
    }
    });
};

exports.reviewModifyAttendance= (req, res, next) => {
    var Model=require('../models/course');
    Model.find({teacher:req.cookies.userid},function(err, docs) {
    if( err || !docs) {
        console.log("Error in retrieving courses");
        res.redirect('/');
    } else {            
        console.log("Courses retrieved");
        res.render('pages/reviewModifyAttendance',{course: docs});
        next();
    }
    });
};

exports.takeAttendanceSheet= (req, res, next) => {
    var Model=require('../models/user');
    Model.find({batch:req.body.batch},function(err, docs) {
    if( err || !docs) {
        console.log("Error in retrieving courses");
        res.redirect('/');
    } else {            
        console.log("Courses retrieved");
         res.render('pages/takeAttendanceSheet',{course:req.body.course,teacher:req.body.teacher,date:req.body.date,batch:req.body.batch,student:docs});
         console.log(docs);
        next();
    }
    });
};

exports.reviewModifyAttendanceSheet= (req, res, next) => {
    var present=[];
    var absent=[];
    console.log(req.body.date);
    console.log(req.body.course);
    var Model=require('../models/attendance');
    Model.find({batch:req.body.batch,date:req.body.date,course:req.body.course},function(err, docs) {
    if( err || !docs) {
        console.log("Error in retrieving attendance");
        res.redirect('/');
    } else {   
        docs[0]['attend'].forEach(element => present.push(element));
        
        console.log("Attendance retrieved");
        var Model1=require('../models/user');
        console.log('ads'+present);
        Model1.find({batch:req.body.batch,level:"student"},function(err, docs) {
        if( err || !docs) {
            console.log("Error in retrieving attendance");
            res.redirect('/');
        } else {            
        
        docs.forEach(element => {
            if(present.indexOf(element['userid'])==-1)absent.push(element['userid']);
        });
        res.render('pages/reviewModifyAttendanceSheet',{course:req.body.course,teacher:req.body.teacher,date:req.body.date,batch:req.body.batch,present:present,absent:absent});
         console.log(docs);
        next();
    }
    });
    }
    });
};

exports.save= (req, res, next) => {
    
    var attend=[];
  
    for(var key in req.body) {
    if(req.body.hasOwnProperty(key)){
        if(key!='course'&&key!='teacher'&&key!='date'&&key!='batch')attend.push(key);
     }
    }
    var Model=require('../models/attendance');
    var model=new Model({course:req.body.course,teacher:req.body.teacher,date:req.body.date,batch:req.body.batch,attend:attend});
    model.save()
   .then(doc => {
     console.log(doc);
   })
   .catch(err => {
     console.error(err);
   })
    res.redirect('/teacherHub');
    next();
};

exports.modify= (req, res, next) => {
    var Model1=require('../models/attendance');
    
    console.log(req.body.batch);
    console.log(req.body.date);
    console.log(req.body.course);
    Model1.deleteOne({batch:req.body.batch,date:req.body.date,course:req.body.course}, function(err, docs) {
        if( err || !docs) {
            console.log("Error in deleteing attendance");
            res.redirect('/');
        } else {            
            var attend=[];
            
        for(var key in req.body) {
        if(req.body.hasOwnProperty(key)){
        if(key!='course'&&key!='teacher'&&key!='date'&&key!='batch')attend.push(key);
          }
        }
        var Model=require('../models/attendance');
        var model=new Model({course:req.body.course,teacher:req.body.teacher,date:req.body.date,batch:req.body.batch,attend:attend});
        model.save()
       .then(doc => {
          console.log(doc);
        })
       .catch(err => {
          console.error(err);
        })
        res.redirect('/teacherHub');
         next();
        }
   });
};

