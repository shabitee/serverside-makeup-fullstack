"use strict";

const express = require('express');
const cors = require('cors');
require('dotenv').config();
// const mongoose = require("mongoose");


const app = express();
const PORT = process.env.PORT;

const errorHandler = require('./handlers/500');
const notFoundHandler = require('./handlers/404');
const makeupRoutes = require('./routes/makeupApi');


// Middlewares & route
app.use(cors());
app.use(express.json());

app.use(makeupRoutes);
app.use(errorHandler);
app.use('*',notFoundHandler);




app.get('/', (req,res) => {
   res.send('all good')
})


// app.use(express.json());


app.listen(PORT,()=>console.log(`Listening on port ${PORT}`));