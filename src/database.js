const mongoose = require('mongoose');

const URI = "mongodb://mongodb-container:27017/crud-tasks"

mongoose.connect(URI)
  .then(db => console.log("DB is connected 1"))
  .catch(err => console.error(err));

  module.exports = mongoose;