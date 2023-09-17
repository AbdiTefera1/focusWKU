const express = require('express');
const { login, signup, regiterMember } = require('../controller/userCtrl');

const userRouter = express.Router();

userRouter.post('/login', login);
userRouter.post('/signup', signup);
userRouter.post('/register', regiterMember)

module.exports = userRouter;
