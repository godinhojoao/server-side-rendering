const db = require('../config/database')

var TaskSchema = db.Schema({
  name: { type: "String" },
  status: { type: "String" }
});

module.exports = db.model("Task", TaskSchema);