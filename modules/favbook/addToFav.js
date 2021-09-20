const mongoose = require("mongoose");

const AddBookSchema = new mongoose.Schema({
  id: String,
  title: String,
  description: String,
  image: String,
  authors: String,
  categories: String,
  publishedDate: String,
  email: String,
  isFav: Boolean,
});

FavModel = mongoose.model("FavModel", AddBookSchema);

module.exports = FavModel;
