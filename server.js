"use strict";
const mongoose = require("mongoose");
mongoose.connect(process.env.URL);
require("dotenv").config();
const express = require("express");
const cors = require("cors");
const server = express();
server.use(cors());
server.use(express.json());
const PORT = process.env.PORT || 3333;

server.get("/", homeHandler);
function homeHandler(request, respone) {
  respone.send(console.log("Home page"));
}

server.listen(PORT, () => console.log(`listening on ${PORT}`));
