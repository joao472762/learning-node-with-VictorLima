
const express  = require('express')
const app =  express()


app.get('/',(req,res)=>{
    res.send('motherfuck vibes nigga')
})

app.get('/show/:job/:name',(req,res)=>{
    const name = req.params.name
    const job =  req.params.job
     
    res.send(`Olá ${name} sua profisão é ${job}`)
})

app.listen(3000,()=>{
    console.log('your page is runing in htttps/locahost3000:')
})

