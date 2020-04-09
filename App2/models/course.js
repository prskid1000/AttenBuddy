var mongoose = require('mongoose');
var CourseSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true
  },
  teacher: {
    type: String,
    required: true,
    trim: true
  },
  year: {
    type: String,
    required: true,
    trim: true
  },
  
});

var Course = mongoose.model('Course', CourseSchema);
module.exports = Course;


