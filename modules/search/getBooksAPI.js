"use strict";
const axios = require("axios");
function SearchBooksConstructor(
  id,
  title,
  description,
  image = null,
  authors = "Raj Kishore Sinha",
  categories = "History",
  publishedDate = null,
  isFav = false
) {
  this.id = id;
  this.title = title;
  this.description = description;
  this.image = image;
  this.authors = authors;
  this.categories = categories;
  this.publishedDate = publishedDate;
}
const getBooksTerm = async (req, res) => {
  const { q } = req.query;
  try {
    const {
      data: { items: searchData },
    } = await axios.get(
      `https://www.googleapis.com/books/v1/volumes?q=${q}}&maxResults=40`
    );
    const mapSearchData = searchData.map(({ id, volumeInfo }) => {
      // * Optional_chaining https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Optional_chaining
      return new SearchBooksConstructor(
        id,
        volumeInfo.title,
        volumeInfo.description,
        volumeInfo.imageLinks?.thumbnail,
        volumeInfo?.authors?.[0],
        volumeInfo?.categories?.[0],
        volumeInfo.publishedDate
      );
    });
    res.json(mapSearchData);
  } catch (err) {
    res.status(500).send({ message: err.message, err });
  }
};
module.exports = getBooksTerm;
