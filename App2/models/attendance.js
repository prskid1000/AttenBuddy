var mongoose = require('mongoose');

var AttendanceSchema = new mongoose.Schema({
  course: {
    type: String,
    required: true,
    trim: true
  },
  teacher: {
    type: String,
    required: true,
    trim: true
  },
  date: {
    type: String,
    required: true,
    trim: true
  },
  batch: {
    type: String,
    required: true,
    trim: true
  },
  attend: [String]
});

var Attendance = mongoose.model('Attendance', AttendanceSchema);
module.exports = Attendance;


