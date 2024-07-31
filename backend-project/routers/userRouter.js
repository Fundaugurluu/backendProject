const router=require('express').Router();
const { Router } = require('express');
const UserController =require('../controllers/userController')

router.post('/register',UserController.createUser)
router.post('login',UserController.getUser);

module.exports=router;