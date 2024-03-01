const express = require ('express')
const app = express()
const path = require('path')
const port = 3000

app.use(express.static(path.join(__dirname, 'public')))

app.listen(port,'192.168.100.3',()=>{
    console.log( `Aplication working in port: ${port}` )
})

app.get('/',(req,res)=>{
    res.sendFile(path.join(__dirname + '/public/html/index.html'))
})