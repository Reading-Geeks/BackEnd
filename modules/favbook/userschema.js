"use strict";
const mongoose = require("mongoose");
mongoose.connect(process.env.URL);

const userschema = new mongoose.Schema({
  name: String,
  email: String,
  finishedBooks: String,
  categoriesOfInterest: String,
});
let userinfo = mongoose.model("userinfo", userschema);

module.exports = userinfo;
