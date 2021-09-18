"use strict";

require("dotenv").config();
const mongoose = require("mongoose");
mongoose.connect(process.env.URL);
const express = require("express");
const cors = require("cors");
const server = express();
server.use(cors());
server.use(express.json());
const {
  getBooksTerm,
  getBestSellerBooks,
} = require("./modules/search/getBooksAPI");
const PORT = process.env.PORT || 3333;
function homeHandler(request, respond) {
  respond.send("Home page");
}

const addBookHandler = require("./modules/donate/donate");
// * check if you are connected with the database
const db = mongoose.connection;
db.on("error", (err) => console.log(err, "connection error:"));
db.once("open", () => console.log("connected to database"));

server.get("/", homeHandler);
server.get("/search", getBooksTerm);
server.get("/search/best-seller", getBestSellerBooks);
server.post("/search/:id", (req, res) => {});
server.get("/donate", addBookHandler);
server.post("/donate", addBookHandler);

server.listen(PORT, () => console.log(`listening on ${PORT}`));
