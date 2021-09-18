"use strict";
const axios = require("axios");
function SearchBooksConstructor(
  id,
  title,
  description,
  image = null,
  authors = "Raj Kishore Sinha",
  categories = "History",
  publishedDate = null
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
      s,
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
const getBestSellerBooks = async (_, res) => {
  try {
    const {
      data: {
        results: { books: bestSeller },
      },
    } = await axios.get(
      `https://api.nytimes.com/svc/books/v3/lists/current/science.json?api-key=OkxyZuHz9Z3BHUbJRurs6b2Kxk4ycLmA`
    );

    const mapBestSeller = bestSeller.map(
      // * isbns is an id of the book
      ({ isbns, title, author, description, book_image }) => {
        return new SearchBooksConstructor(
          isbns[0].isbn10,
          title,
          description,
          book_image,
          author,
          "Science",
          null
        );
      }
    );
    res.json(mapBestSeller);
  } catch (err) {
    res.send(err.message);
  }
};
module.exports = { getBooksTerm, getBestSellerBooks };
