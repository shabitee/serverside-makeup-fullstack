'use strict';

const mongoose = require("./mongo");

const makeupSchema = new mongoose.Schema({
    makeupName: String,
    makeupPrice: String,
    makeupBrand: String,
    makeupImageUrl: String,
    makeupDescription: String,

});


const makeupModel = mongoose.model("makeup"
,makeupSchema);

// function seedMakeup(){
//     const newMakeup = new makeupModel({
//     makeupName:"Lippie Pencil",
//     makeupPrice:"£5",
//     makeupBrand:"colorpop",
//     makeupImageUrl:"https://cdn.shopify.com/s/files/1/1338/0845/collections/lippie-pencil_grande.jpg?v=1512588769",
//     makeupDescription: "Lippie Pencil A long-wearing and high-intensity lip pencil that glides on easily and prevents feathering. Many of our Lippie Stix have a coordinating Lippie Pencil designed to compliment it perfectly, but feel free to mix and match!",


//     });
// newMakeup.save();
// }
// seedMakeup();


module.exports = makeupModel;