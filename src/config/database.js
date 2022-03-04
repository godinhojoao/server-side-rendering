require('dotenv').config();
const mongoose = require("mongoose");
const uri = process.env.CONNECTION_STRING;

const urijoao = (uri);

mongoose.connect(urijoao, { useNewUrlParser: true, useUnifiedTopology: true });

module.exports = mongoose;