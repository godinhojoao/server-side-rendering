require('dotenv').config();
const mongoose = require("mongoose");
const uri = process.env.CONNECTION_STRING;

mongoose.connect(uri);

module.exports = mongoose;