const FavDonateModel = require("./donateToFav");
const obj = {};
obj.addDonateData = async function addDonateHandler(request, response) {
  const {id,title,description,category,author,publishedDate,email,isFav,takenemail,image } = request.body;
  
  await FavDonateModel.create({
    id: id,
    title: title,
    description: description,
    category: category,
    author: author,
    publishedDate: publishedDate,
    email: email,
    isFav,
    takenemail:takenemail,
    image:image,
  });
  FavDonateModel.find({ email: takenemail }, (err, result) => {
    if (err) {
      console.log(err);
    } else {
      response.send(result);
    }
  });
};

obj.readDonateData = async function getDonateHandler(request, response) {
  const email = request.query.email;
  FavDonateModel.find({  }, (err, result) => {
    if (err) {
      console.log(err);
    } else {
      response.send(result);
    }
  });
};
obj.readDonateData2 = async function getDonateHandler(request, response) {
  const email = request.query.email;

  FavDonateModel.find({ takenemail: email }, (err, result) => {
    if (err) {
      console.log(err);
    } else {
      response.send(result);
    }
  });
};
obj.removeDonateData = function deleteDonateHandler(request, response) {
  const bookId = request.params.id;
  const email = request.query.email;
  FavDonateModel.deleteOne({ _id: bookId }, (err, result) => {
    FavDonateModel.find({ takenemail: email }, (err, result) => {
      if (err) {
        console.log(err);
      } else {
        response.send(result);
      }
    });
  });
};

module.exports = obj;
