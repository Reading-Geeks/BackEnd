const FavDonateModel = require("./donateToFav");
const obj = {};
obj.addDonateData = async function addDonateHandler(request, response) {
  const id = request.body.id;
  const title = request.body.title;
  const description = request.body.description;
  const category = request.body.category;
  const author = request.body.author;
  const publishedDate = request.body.publishedDate;
  const email = request.body.email;
  const isFav = request.body.isFav;
  await FavDonateModel.create({
    id: id,
    title: title,
    description: description,
    category: category,
    author: author,
    publishedDate: publishedDate,
    email: email,
    isFav,
  });
  FavDonateModel.find({ email: email }, (err, result) => {
    if (err) {
      console.log(err);
    } else {
      response.send(result);
    }
  });
};

obj.readDonateData = async function getDonateHandler(request, response) {
  const email = request.query.email;
  FavDonateModel.find({ email: email }, (err, result) => {
    if (err) {
      console.log(err);
    } else {
      response.send(result);
    }
  });
};

obj.removeDonateData = function deleteDonateHandler(request, response) {
  const bookId = request.params.id;
  console.log(bookId);
  const email = request.query.email;
  FavDonateModel.deleteOne({ _id: bookId }, (err, result) => {
    FavDonateModel.find({ email: email }, (err, result) => {
      if (err) {
        console.log(err);
      } else {
        response.send(result);
      }
    });
  });
};

module.exports = obj;