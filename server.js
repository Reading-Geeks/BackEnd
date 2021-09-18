"use strict";

require("dotenv").config();
const mongoose = require("mongoose");
mongoose.connect(process.env.URL);
const express = require("express");
const cors = require("cors");
const server = express();
server.use(cors());
server.use(express.json());
const getSearchBooksAPI = require("./modules/search/getBooksAPI");
const PORT = process.env.PORT || 3333;
function homeHandler(request, respond) {
  respond.send("Home page");
}

const addBookHandler = require("./modules/donate/donate");
const {updateBookHandler, deleteBookHandler, getBooksHandler} = require("./modules/donate/update");


// * check if you are connected with the database
const db = mongoose.connection;
db.on("error", (err) => console.log(err, "connection error:"));
db.once("open", () => console.log("connected to database"));

server.get("/", homeHandler);
server.get("/search", getSearchBooksAPI);
server.post("/search/:id", (req, res) => {});
server.post("/donate", addBookHandler);
server.put("/donate/:id", updateBookHandler);
server.delete("/donate/:id", deleteBookHandler);
server.get("/donate", getBooksHandler);


server.listen(PORT, () => console.log(`listening on ${PORT}`));
