const config={
    // 端口号
    APP_PORT: 3333,
    //mongodb相关配置
    mongodb: "require('mongodb').MongoClient",
    url: "mongodb://localhost:27017",
    db_name: "yzzy"
}

module.exports=config


//mongodb
const mongodb = require('mongodb').MongoClient;
const url="mongodb://localhost:27017"
const db_name="yzzy";