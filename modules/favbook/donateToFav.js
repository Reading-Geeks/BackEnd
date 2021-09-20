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
  takenemail: String,
  image: String,
});
FavDonateModel = mongoose.model("FavDonateModel", DonateBookSchema);

module.exports = FavDonateModel;
