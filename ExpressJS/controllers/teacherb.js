exports.getSheet= (req, res, next) => {
    console.log(req.body.date);
    console.log(req.body.course);
    var Model=require('../models/attendance');
    Model.find({batch:req.body.batch,date:req.body.date,course:req.body.course},function(err, docs) {
    if( err || !docs) {
        console.log("Error in retrieving attendance");
        res.json({ success: 'False', data: err })
    } else {   
        console.log("Attendance retrieved");
        res.json({ success: 'True', data: docs })
    }
    });
};

exports.saveSheet = (req, res, next) => {
    
    var attend=[];
  
    for(var key in req.body) {
    if(req.body.hasOwnProperty(key)){
        if(key!='course'&&key!='teacher'&&key!='date'&&key!='batch')attend.push(key);
     }
    }

    var Model=require('../models/attendance');
    console.log(req.body)
    var model=new Model({course:req.body.course,teacher:req.body.teacher,date:req.body.date,batch:req.body.batch,attend:attend});

    model.save()
   .then(doc => {
     console.log(doc);
     res.json({ success: 'False', data: err })
   })
   .catch(err => {
     console.error(err);
     res.json({ success: 'True', data: docs })
   })
};

exports.modifySheet = (req, res, next) => {
    var Model1=require('../models/attendance');
    
    Model1.deleteOne({batch:req.body.batch,date:req.body.date,course:req.body.course}, function(err, docs) {
        if( err || !docs) {
            console.log("Error in deleteing attendance");
            res.json({ success: 'False', data: err })
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
          res.json({ success: 'False', data: err })
        })
       .catch(err => {
          console.error(err);
          res.json({ success: 'True', data: err })
        })
        }
   });
};

