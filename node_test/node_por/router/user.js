const express = require("express")
const router = express.Router()

router.get('/user', (req, res) => {
    res.send({
        code: 0,
        msg: "请求成功",
        data: {
            username: 'zs',
            age: 1000,

        }
    })
})

module.exports = router