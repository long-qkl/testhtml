const express = require('express');
const app = express();
const { APP_PORT, mongodb } = require('./config')

// app.get('/', (req, res) => {
//     res.send('Hello Express~~~~~')
// })

// app.get('/getdata',(req,res)=>{
//     res.send('2222222222222222222')
// })

// app.post('/register',(req,res)=>{
//     console.log("register");
// })

// app.post('/login',(req,res)=>{
//     console.log("登录")
// })


/*const appRouter=require("./router/app")
app.use(appRouter)
const userRouter = require('./router/user');
app.use(userRouter)
*/

const router=require("./router")
app.use("/api/v1",router)

app.listen(APP_PORT, () => {
    console.log(`启动服务器成功：http:localhost:${APP_PORT}`);
});





