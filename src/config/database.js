require('dotenv').config();
const mongoose = require("mongoose");
const uri = process.env.CONNECTION_STRING;

mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true });

module.exports = mongoose;