"use strict";
const mongoose = require("mongoose");


const bookSchema = new mongoose.Schema({
title: String,
description: String,
category: String,
author: String,
image: String,
publishedDate: String,
email: String,
});

// const bookModel = mongoose.model("DonateBook", bookSchema);

// module.exports = bookModel;
module.exports =  mongoose.model("DonateBook", bookSchema);