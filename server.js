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
const getSearchBooksAPI = require("./modules/search/getBooksAPI");
// favpage works start marwan and faisal
const getuserinfo = require("./modules/favbook/getuserinfo");
const addinfo = require("./modules/favbook/addinfo");
const updateUser = require("./modules/favbook/updateUser");
const FavHandler = require("./modules/favbook/favHandlers");
const FavDonateHandler = require("./modules/favbook/donateToFavHandlers");


const {
  getaboutUsInfo,
  updateAbotUsHandler,
  getAboutHandler

} = require("./modules/aboutus/Aboutuspage");


// favpage works end here marwan anda faisal
const PORT = process.env.PORT || 3333;
function homeHandler(request, respond) {
  respond.send("Home page");
}

const addBookHandler = require("./modules/donate/donate");
const {
  updateBookHandler,
  deleteBookHandler,
  getBooksHandler,
} = require("./modules/donate/update");

// * check if you are connected with the database
const db = mongoose.connection;
db.on("error", (err) => console.log(err, "connection error:"));
db.once("open", () => console.log("connected to database"));

server.get("/", homeHandler);
server.get("/search", getBooksTerm);
server.get("/search/best-seller", getBestSellerBooks);
server.post("/search/:id", (req, res) => {});
// favpage works start marwan and faisal
server.post("/addinfo", addinfo);
server.get("/userInfo", getuserinfo);
server.put("/updateUser/:id", updateUser);
server.get("/readData", FavHandler.readData);
server.post("/addData", FavHandler.addData);
server.delete("/removeData/:id", FavHandler.removeData);
server.get("/readDonateData", FavDonateHandler.readDonateData);
server.get("/readDonateData2", FavDonateHandler.readDonateData2);
server.post("/addDonateData", FavDonateHandler.addDonateData);
server.delete("/removeDonateData/:id", FavDonateHandler.removeDonateData);
// favpage works end here marwan anda faisal
server.post("/donate", addBookHandler);
server.put("/donate/:id", updateBookHandler);
server.delete("/donate/:id", deleteBookHandler);
server.get("/donate", getBooksHandler);

server.get("/aboutus", getAboutHandler);
server.put('/updateAbotUs/:id',updateAbotUsHandler);

server.listen(PORT, () => console.log(`listening on ${PORT}`));
