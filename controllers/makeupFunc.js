'use strict';
const axios = require('axios');
const makeupModel = require('../models/scheModel');

async function getAllMakeupApi(req,res){
    let allMakeup = await axios.get('https://makeup-api.herokuapp.com/api/v1/products.json');

    res.send(allMakeup.data);
}

// To get object to my database
async function getAllMakeupToDatabase(req,res){
   let allMakeup =await makeupModel.find({});
   res.send(allMakeup);
} 


async function addMakeupInDatabase(req,res){
    console.log("inside add",req.body)
    const {name,price,brand,image_link,description} =req.body;
    let newMakeup = await makeupModel.create({
    makeupName: name,
    makeupPrice: price,
    makeupBrand: brand,
    makeupImageUrl: image_link,
    makeupDescription: description
    });
    let allMakeup =await makeupModel.find({});
    res.send(allMakeup);
    // res.send(newMakeup);
}



async function delMakeupInDatabase(req,res){
    const id = req.params.id;
   let deletedMakeup= await makeupModel.findByIdAndDelete(id);
    // res.send(`${deletedMakeup.makeupName} has been deleted`);
    let allMakeup =await makeupModel.find({});
    res.send(allMakeup);


}

async function updateMakeupInDatabase(req,res){
    const id = req.params.id;
    const {makeupName,makeupPrice,makeupBrand,makeupImgUrl,makeupDescription} =req.body;
    let updatedMakeup = await makeupModel.findByIdAndUpdate(id, {
        makeupName,
        makeupPrice,
        makeupBrand,
        makeupImgUrl,
        makeupDescription
    });
    let allMakeup =await makeupModel.find({});
    res.send(allMakeup);
    // res.send(updatedMakeup);
}


module.exports = {
    getAllMakeupApi,
    getAllMakeupToDatabase,
    getAllMakeupToDatabase,
    addMakeupInDatabase,
    delMakeupInDatabase,
    updateMakeupInDatabase
    

}