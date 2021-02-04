exports.isAuth= (req, res, next) => {
    var Model=require('../models/user');
    Model.findOne({ password: req.body.password, userid: req.body.userid},function(err, docs) {
    if( err || !docs) {
        res.json({ success: 'False', data: err })
    } else {            
        res.json({ success: 'True', data: docs })
    }
    });
};
