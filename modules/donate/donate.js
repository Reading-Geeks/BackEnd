"use strict";

const mongoose = require("mongoose");
const bookModel = require("./schemaAndModel");

// main().catch(err => console.log(err));
// async function main() {
//   // seedData();
// }
// async function seedData() {
//   const firstBookSample = new bookModel({
//     title: "Fake",
//     description: "Fake",
//     category: "Fake",
//     author: "Fake",
//     image: "Fake",
//     publishedDate: "Fake",
//     email: "readinggeeks301@gmail.com",
//   });
//   await firstBookSample.save();
// }

/*-----------------------------Add (POST) a book-------------------------------- */

async function addBookHandler(req, res) {
  const { title, description, category, author, image, publishedDate, email } =
    req.body;
  //   console.log(title, description, category, author, publishedDate, email);
  await bookModel.create({
    title: title,
    description: description,
    category: category,
    author: author,
    image: image,
    publishedDate: publishedDate,
    email: email,
  });

  bookModel.find({}, (err, result) => {
    if (err) {
      console.log(err);
    } else {
      // console.log(result);
      res.send(result);
    }
  });
}
/*------------------------------------------------------------------------------ */
module.exports = addBookHandler;
