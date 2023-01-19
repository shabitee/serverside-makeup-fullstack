'use strict';



const express =require('express');
const makeupRoutes = express.Router();
const makeupHandlers = require('../controllers/makeupFunc');
console.log(makeupHandlers);


makeupRoutes.get('/makeupapi',makeupHandlers.getAllMakeupApi);
makeupRoutes.get('/makeup',makeupHandlers.getAllMakeupToDatabase);
makeupRoutes.post('/makeup',makeupHandlers.addMakeupInDatabase);
makeupRoutes.delete('/makeup/:id',makeupHandlers.delMakeupInDatabase);
makeupRoutes.put('/makeup/:id',makeupHandlers.updateMakeupInDatabase);





module.exports = makeupRoutes;