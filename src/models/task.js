const mongoose = require('mongoose');
const { Schema } = mongoose;

const TaskSchema = new Schema({
  title: {
    type: 'string',
    required: true
  },
  description: {
    type: 'string',
    required: true
  }
});

module.exports = mongoose.model("Task", TaskSchema);

