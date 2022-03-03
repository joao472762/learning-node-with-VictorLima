const express = require('express')
const app = express();

app.get('/',(req,res)=>{
    res.send('we work with nodemon')
})
app.listen(3000,()=>{
    console.log('you page is running in localhost300')
})