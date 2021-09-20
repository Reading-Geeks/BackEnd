"use strict";

const mongoose = require("mongoose");

let modelAboutUs;
const AboutSchema = new mongoose.Schema({
    // name: String
    // the basic structure for object
    PersonName: String,
    image: String,
    Description: String,
    email: String


});

modelAboutUs = mongoose.model("AboutSchema", AboutSchema);


console.log(modelAboutUs)

async function getaboutUsInfo() {



    const person1 = new modelAboutUs({
        PersonName: 'Shahd',
        image: '',
        Description: 'Book about the art in The past',
        email: 'shhad@gmail.com'
    });
    const person2 = new modelAboutUs({
        PersonName: 'Shahd',
        image: '',
        Description: 'Book about the art in The past',
        email: 'shhad@gmail.com'
    });
    const person3 = new modelAboutUs({
        PersonName: 'Shahd',
        image: '',
        Description: 'Book about the art in The past',
        email: 'shhad@gmail.com'
    });
    const person4 = new modelAboutUs({
        PersonName: 'Shahd',
        image: '',
        Description: 'Book about the art in The past',
        email: 'shhad@gmail.com'
    });
    const person5 = new modelAboutUs({
        PersonName: 'Shahd',
        image: `https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80`,
        Description: 'Book about the art in The past',
        email: 'shhad@gmail.com'
    });
    const person6 = new modelAboutUs({
        PersonName: 'Shahd',
        image: '',
        Description: 'Book about the art in The past',
        email: 'shhad@gmail.com'
    });
    // we use save method to save data 

    await person1.save();
    await person2.save();
    await person3.save();
    await person4.save();
    await person5.save();
    await person6.save();
}


// function updateAbotUsHandler(req, res) {
//     const id = req.params.id;
//     const { image, Description, PersonName } = req.body;

//     modelAboutUs.findByIdAndUpdate(id, { image, PersonName, Description }, (err, result) => {
//         modelAboutUs.find({ ownerEmail: email }, (err, result) => {
//             if (err) {
//                 console.log(err);
//             }
//             else {
//                 res.send(result);
//             }
//         })
//     })
// }

async function updateAbotUsHandler(req, res) {
    const id = req.params.id;
    const { image, Description, PersonName, email } = req.body;
   

    await modelAboutUs.findByIdAndUpdate(id, { image, PersonName, Description })

    modelAboutUs.find({ }, (err, result) => {
        if (err) {
            console.log('Error !');
        }
        else {
            console.log(result);
            res.send(result);
        }
    })

}


function getAboutHandler(r, resp) {
    // const x=r.query.email ;
    // const email= r.query.email;
    //    console.log(x)
    modelAboutUs.find({}, (err, result) => {
        if (err) {

            console.log(err);
        }

        else {

            resp.send(result);

        }
    }

    )


}

module.exports = { getAboutHandler, updateAbotUsHandler }
