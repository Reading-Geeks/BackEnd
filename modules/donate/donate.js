"use strict";

const mongoose = require("mongoose");
require("dotenv").config();
const express = require("express");
const cors = require("cors");
const server = express();
server.use(cors());
server.use(express.json());
const PORT = process.env.PORT || 3333;

// const main = require('./main');

let bookModel;
main().catch((err) => console.log(err));

async function main() {
  await mongoose.connect(process.env.URL);
  const bookSchema = new mongoose.Schema({
    title: String,
    description: String,
    category: String,
    author: String,
    publishedDate: String,
    email: String,
  });
  bookModel = mongoose.model("DonateBook", bookSchema);
  // seedData();
}

async function seedData() {
  const firstBookSample = new bookModel({
    title: "Fake",
    description: "Fake",
    category: "Fake",
    author: "Fake",
    publishedDate: "Fake",
    email: "readinggeeks301@gmail.com",
  });
  await firstBookSample.save();
}
/*------------------------------------------------------------------------------ */


/*------------------------------------------------------------------------------ */

async function addBookHandler(req, res) {
  const { title, description, category, author, publishedDate, email } =
    req.body;
  //   console.log(title, description, category, author, publishedDate, email);
  await bookModel.create({
    title: title,
    description: description,
    category: category,
    author: author,
    publishedDate: publishedDate,
    email: email,
  });

  bookModel.find({email:email}, (err, result) =>{
    if(err){
        console.log(err);
    }else{
        // console.log(result);
        res.send(result);
    }

  });
}

module.exports = addBookHandler;
