exports.manageCourse= (req, res, next) => {
    var Model=require('../models/course');
    Model.find({},function(err, docs) {
    if( err || !docs) {
        console.log("Error in retrieving courses");
        res.redirect('/');
    } else {            
        console.log("Courses retrieved");
        res.render('pages/manageCourse',{course: docs});
        next();
    }
    });
}; 

exports.manageStudent= (req, res, next) => {
    var Model=require('../models/user');
    Model.find({level:"student"},function(err, docs) {
    if( err || !docs) {
        console.log("Error in retrieving students");
        res.redirect('/');
    } else {            
        console.log("Student retrieved");
        res.render('pages/manageStudent',{student: docs});
        next();
    }
    });
};

exports.manageTeacher= (req, res, next) => {
    var Model=require('../models/user');
    Model.find({level:"teacher"},function(err, docs) {
    if( err || !docs) {
        console.log("Error in retrieving teachers");
        res.redirect('/');
    } else {            
        console.log("Teacher retrieved");
        res.render('pages/manageTeacher',{teacher: docs});
        next();
    }
    });
};

exports.addCourse= (req, res, next) => {
    var Model=require('../models/course');
    var model=new Model({name:req.body.course,teacher:req.body.teacher,year:req.body.year});
    model.save()
   .then(doc => {
     console.log(doc);
   })
   .catch(err => {
     console.error(err);
   })
    res.redirect('/manageCourse');
    next();
};

exports.addTeacher= (req, res, next) => {
    var Model=require('../models/user');
    var model=new Model({userid:req.body.userid,password:req.body.password,level:"teacher"});
    model.save()
   .then(doc => {
     console.log(doc);
   })
   .catch(err => {
     console.error(err);
   })
    res.redirect('/manageTeacher');
    next();
};

exports.addStudent= (req, res, next) => {
    var Model=require('../models/user');
    var model=new Model({userid:req.body.userid,password:req.body.password,level:"student",batch:req.body.batch});
    model.save()
   .then(doc => {
     console.log(doc);
   })
   .catch(err => {
     console.error(err);
   })
    res.redirect('/manageStudent');
    next();
};

exports.deleteCourse= (req, res, next) => {
    var Model=require('../models/course');
    Model.deleteMany({name:req.body.course,teacher:req.body.teacher,year:req.body.year},function(err, docs) {
    if( err || !docs) {
        console.log("Error in deleting courses");
        res.redirect('/');
    } else {            
        console.log("Courses deleted");
        res.redirect('/manageCourse');
        next();
    }
    });
};

exports.deleteTeacher= (req, res, next) => {
    var Model=require('../models/user');
    Model.deleteMany({userid:req.body.userid,password:req.body.password,level:"teacher"},function(err, docs) {
    if( err || !docs) {
        console.log("Error in deleting teachers");
        res.redirect('/');
    } else {            
        console.log("Teacher deleted");
        res.redirect('/manageTeacher');
        next();
    }
    });
};

exports.deleteStudent= (req, res, next) => {
    var Model=require('../models/user');
    Model.deleteMany({userid:req.body.userid,password:req.body.password,level:"student"},function(err, docs) {
    if( err || !docs) {
        console.log("Error in deleting students");
        res.redirect('/');
    } else {            
        console.log("Student deleted");
        res.redirect('/manageStudent');
        next();
    }
    });
};
