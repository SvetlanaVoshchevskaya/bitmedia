const express= require('express');
const user =require('./user');
const userStat= require('./user-stat');

const router =express.Router();

router
.get('/user', user)
.get('/user/:id', userStat)