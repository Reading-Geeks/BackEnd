"use strict";
const userinfo = require("./userschema");
async function addinfo(req, res) {
    const name = req.body.name;
    const email = req.body.email;
    const finishedBooks= req.body.finishedBooks;
    const categoriesOfInterest= req.body.categoriesOfInterest;
    
    await userinfo.create({
      name: name,
      email: email,
      finishedBooks: finishedBooks,
      categoriesOfInterest: categoriesOfInterest,
    });
    userinfo.find({ email: email }, (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send(result);
      }
    });
  }
  module.exports=addinfo