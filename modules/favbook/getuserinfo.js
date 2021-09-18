"use strict";

const userinfo = require("./userschema");
function getuserinfo(req, res) {
  const email = req.query.email;
  // console.log(email)
  userinfo.find({ email }, (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send(result);
    }
  });
}
module.exports = getuserinfo;
