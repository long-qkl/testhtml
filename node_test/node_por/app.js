const express = require('express');
const app = express();

//连接mongodb
const mongodb = require('mongodb').MongoClient;
const url="mongodb://localhost:27017"
const db_name="yzzy";


app.get('/',(req,res)=>{
    res.send('Hello Express')

    console.log(req,res)
})

app.listen(3333, () => {
    console.log("启动服务器成功：http:localhost:3333");
});





