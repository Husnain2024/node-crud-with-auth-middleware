const express = require('express');
const route = express.Router();
const userController = require('../controllers/users');

route.post('/signUp',userController.signUp);
route.post('/signIn',userController.signIn);



module.exports = route;