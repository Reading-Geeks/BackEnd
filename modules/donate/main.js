// "use strict";

// const mongoose = require("mongoose");
// require("dotenv").config();
// const express = require("express");
// const cors = require("cors");
// const server = express();
// server.use(cors());
// server.use(express.json());
// const PORT = process.env.PORT || 3333;
// const seedData = require('./seedData');


// async function main() {
//   await mongoose.connect(process.env.URL);
//   const bookSchema = new mongoose.Schema({
//     title: String,
//     description: String,
//     category: String,
//     author: String,
//     publishedDate: String,
//     email: String,
//   });
//   let bookModel = mongoose.model("DonateBook", bookSchema);
//     seedData();
// }


// module.exports = main;