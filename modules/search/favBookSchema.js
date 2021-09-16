const mongoose = require("mongoose");

const BookSchema = new Schema({
  id: Number,
  title: String,
  description: String,
  image: String,
  authors: String,
  categories: String,
  publishedDate: String,
});

module.exports = mongoose.model("Book", BookSchema);
