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
// favpage works start marwan and faisal
const getuserinfo = require("./modules/favbook/getuserinfo");
const addinfo = require("./modules/favbook/addinfo");
const updateUser = require("./modules/favbook/updateUser");
const FavHandler = require("./modules/favbook/favHandlers");
// favpage works end here marwan anda faisal
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
server.get("/search", getSearchBooksAPI);
server.post("/search/:id", (req, res) => {});
// favpage works start marwan and faisal
server.post("/addinfo", addinfo);
server.get("/userInfo", getuserinfo);
server.put("/updateUser/:id", updateUser);
server.get("/readData", FavHandler.readData);
server.post("/addData", FavHandler.addData);
server.delete("/removeData/:id", FavHandler.removeData);

// favpage works end here marwan anda faisal
server.get("/donate", addBookHandler);
server.post("/donate", addBookHandler);

server.listen(PORT, () => console.log(`listening on ${PORT}`));
