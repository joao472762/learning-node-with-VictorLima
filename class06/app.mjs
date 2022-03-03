import express from "express";

const app = express();

app.get('/',(req,res)=>{
    res.send('hello word')
})
app.get('/about', (req,res)=>{
    res.send('in this page you learning a bit about me')
})
app.get('/helpUs',(req,res)=>{
    res.send('you cant help us, give us a bit of you money')
})


app.listen(3000, ()=>{
    console.log('server runing in http://localhost:3000/')
})

