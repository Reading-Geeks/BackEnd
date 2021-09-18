const mongoose = require("mongoose");

const AddBookSchema = new mongoose.Schema({
  id: Number,
  title: String,
  description: String,
  image: String,
  authors: String,
  categories: String,
  publishedDate: String,
  email: String,
});
// LoadingData();
FavModel = mongoose.model("FavModel", AddBookSchema);

async function LoadingData() {
  const newBook = new FavModel({
    id: "",
    title: "",
    description: "",
    image: "",
    authors: "",
    categories: "",
    publishedDate: "",
    email: "",
  });
  await newBook.save();
}

module.exports = FavModel;
