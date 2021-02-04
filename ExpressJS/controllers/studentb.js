exports.viewAttendance= (req,res,next) => {
    var Model=require('../models/attendance');
    Model.find({batch:req.body.batch},function(err, docs) {
    if( err || !docs) {
        console.log("Error in retrieving attendance");
        res.json({ success: 'False', data: err })
    } else {      
        console.log("Attendance retrieved");
        res.json({ success: 'True', data: docs })
    }
    });
}

