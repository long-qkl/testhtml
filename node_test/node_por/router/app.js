const express = require("express")
const router = express.Router()

router.post('/register',(req,res)=>{
    res.json({
        code: 0,
        msg:"注册成功"
    })
})

router.post('/login',(req,res)=>{
    res.json({
        code: 0,
        msg:"登录成功"
    })
})

module.exports=router