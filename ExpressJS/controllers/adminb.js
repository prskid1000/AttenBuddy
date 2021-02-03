exports.manageCourse= (req, res, next) => {
    var Model=require('../models/course');
    Model.find({},function(err, docs) {
    if( err || !docs) {
        console.log("Error in retrieving courses");
        res.json({ success: 'False', data: err })
    } else {            
        console.log("Courses retrieved");
        res.json({ success: 'True', data: docs })
    }
    });
}; 

exports.manageStudent= (req, res, next) => {
    var Model=require('../models/user');
    Model.find({level:"student"},function(err, docs) {
    if( err || !docs) {
        console.log("Error in retrieving students");
        res.json({ success: 'False', data: err })
    } else {            
        console.log("Student retrieved");
        res.json({ success: 'True', data: docs })
    }
    });
};

exports.manageTeacher= (req, res, next) => {
    var Model=require('../models/user');
    Model.find({level:"teacher"},function(err, docs) {
    if( err || !docs) {
        console.log("Error in retrieving teachers");
        res.json({ success: 'False', data: err })
    } else {            
        console.log("Teacher retrieved");
        res.json({ success: 'True', data: docs })
    }
    });
};

exports.addCourse= (req, res, next) => {
    var Model=require('../models/course');
    var model=new Model({name:req.body.course,teacher:req.body.teacher,year:req.body.year});
    model.save()
   .then(doc => {
       res.json({ success: 'True', data: doc })
   })
   .catch(err => {
       console.log(err)
       res.json({ success: 'False', data: err })
   })
};

exports.addTeacher= (req, res, next) => {
    var Model=require('../models/user');
    var model=new Model({userid:req.body.userid,password:req.body.password,level:"teacher"});
    model.save()
   .then(doc => {
       res.json({ success: 'True', data: doc })
   })
   .catch(err => {
       console.log("user added")
       res.json({ success: 'False', data: err })
   })
};

exports.addStudent= (req, res, next) => {
    var Model=require('../models/user');
    var model=new Model({userid:req.body.userid,password:req.body.password,level:"student",batch:req.body.batch});
    model.save()
   .then(doc => {
       res.json({ success: 'True', data: doc })
   })
   .catch(err => {
       res.json({ success: 'False', data: err })
   })
};

exports.deleteCourse= (req, res, next) => {
    var Model=require('../models/course');
    Model.deleteMany({name:req.body.course,teacher:req.body.teacher,year:req.body.year},function(err, docs) {
    if( err || !docs) {
        res.json({ success: 'False', data: err })
    } else {            
        res.json({ success: 'True', data: docs })
    }
    });
};

exports.deleteTeacher= (req, res, next) => {
    var Model=require('../models/user');
    Model.deleteMany({userid:req.body.userid,password:req.body.password,level:"teacher"},function(err, docs) {
    if( err || !docs) {
        res.json({ success: 'False', data: err })
    } else {            
        res.json({ success: 'True', data: docs })
    }
    });
};

exports.deleteStudent= (req, res, next) => {
    var Model=require('../models/user');
    Model.deleteMany({userid:req.body.userid,password:req.body.password,level:"student"},function(err, docs) {
    if( err || !docs) {
        res.json({ success: 'False', data: err })
    } else {            
        res.json({ success: 'True', data: docs })
    }
    });
};
