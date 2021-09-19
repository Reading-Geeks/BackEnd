"use strict";

const mongoose = require("mongoose");
const bookModel =require("./schemaAndModel");


/*-----------------------------Update (PUT) a book-------------------------------- */

function updateBookHandler(req, res) {
  const id = req.params.id;
  const { title, description, category, author, image, publishedDate, email } =
    req.body;
  // console.log(id, title, description, category, author, image, publishedDate, email);
  //   console.log("HI");
  bookModel.findByIdAndUpdate(
    id,
    {
      title: title,
      description: description,
      category: category,
      author: author,
      image: image,
      publishedDate: publishedDate,
      email: email,
    },
    (err, result) => {
      bookModel.find({}, (err, result) => {
        if (err) {
          console.log(err);
        } else {
          // console.log(result);
          res.send(result);
        }
      });
    }
  );
}

/*------------------------------------------------------------------------------ */

/*-----------------------------Delete (DELETE) a book-------------------------------- */

function deleteBookHandler(req, res) {
  const id = req.params.id;
  const email = req.query.email;
  bookModel.deleteOne({ _id: id }, (err, result) => {
    bookModel.find({}, (err, result) => {
      if (err) {
        console.log(err);
      } else {
        // console.log(result);
        res.send(result);
      }
    });
  });
}

/*------------------------------------------------------------------------------ */

// server.get("/donate", getBooksHandler);

function getBooksHandler(req, res) {
  // const email = req.query.email;
  bookModel.find({}, (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send(result);
    }
  });
}

module.exports = {updateBookHandler, deleteBookHandler, getBooksHandler};
