"use strict";
const userinfo = require("./userschema");
function updateUser(req, res) {
  const id = req.params.id;
  const { name, finishedBooks, categoriesOfInterest, email,image } = req.body;
  userinfo.findByIdAndUpdate(
    id,
    { name, finishedBooks, categoriesOfInterest,image },
    (err, result) => {
      userinfo.find({ email: email }, (err, result) => {
        if (err) {
          console.log(err);
        } else {
          res.send(result);
        }
      });
    }
  );
}
module.exports = updateUser;
