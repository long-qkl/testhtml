const express = require('express');
const router=express.Router()

router.use('/sys',require('./app'))
router.use('/user',require('./user'))

module.exports=router