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
// seedData();

async function seedData() {
  const info = new userinfo({
    name: "",
    email: "",
    finishedBooks: "",
    categoriesOfInterest: "",
  });
  await info.save();
}

module.exports = userinfo;
