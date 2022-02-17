const db = require('../config/database')

var UserSchema = db.Schema({
  email: { type: "String" },
  name: { type: "String" },
  password: { type: "String" },
  avatar: { type: "String" }
});

module.exports = db.model("User", UserSchema);