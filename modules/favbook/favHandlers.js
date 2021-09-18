const FavModel = require("./addToFav");
const obj = {};
obj.addData = async function addBooksHandler(request, response) {
  const id = request.body.id;
  const title = request.body.title;
  const description = request.body.description;
  const image = request.body.image;
  const authors = request.body.authors;
  const categories = request.body.categories;
  const publishedDate = request.body.publishedDate;
  const email = request.body.email;
  await FavModel.create({
    id: id,
    title: title,
    description: description,
    image: image,
    authors: authors,
    categories: categories,
    publishedDate: publishedDate,
    email: email,
  });
  FavModel.find({ email: email }, (err, result) => {
    if (err) {
      console.log(err);
    } else {
      response.send(result);
    }
  });
};

obj.readData = async function getBooksHandler(request, response) {
  const email = request.query.email;
  FavModel.find({ email: email }, (err, result) => {
    if (err) {
      console.log(err);
    } else {
      response.send(result);
    }
  });
};

obj.removeData = function deleteBooksHandler(request, response) {
  const bookId = request.params.id;
  const email = request.query.email;
  FavModel.deleteOne({ _id: bookId }, (err, result) => {
    FavModel.find({ email: email }, (err, result) => {
      if (err) {
        console.log(err);
      } else {
        response.send(result);
      }
    });
  });
};

module.exports = obj;
