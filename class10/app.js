const express = require('express')
const app  = express();
app.get('/',(req,res)=>{
    res.sendFile(`${__dirname}/pages/index.html`)
})

app.get('/home',(req,res)=>{
    res.sendFile(__dirname + "/pages/index.html")
})

app.listen(3000,()=>{
    console.log('come on man biuld something')
})