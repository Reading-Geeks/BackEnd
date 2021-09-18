const mongoose = require("mongoose");

const DonateBookSchema = new mongoose.Schema({
  id: String,
  title: String,
  description: String,
  category: String,
  author: String,
  publishedDate: String,
  email: String,
  isFav: Boolean,
});
// LoadingData();
FavDonateModel = mongoose.model("FavDonateModel", DonateBookSchema);

async function LoadingData() {
  const newBook = new FavDonateModel({
    id: "",
    title: "",
    description: "",
    category: "",
    author: "",
    publishedDate: "",
    email: "",
  });
  await newBook.save();
}

module.exports = FavDonateModel;