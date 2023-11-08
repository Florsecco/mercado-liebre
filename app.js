require("dotenv").config();
const express = require('express')
const app= express()
const path= require('path')
const port= process.env.PORT || 3001; 


app.use( express.static(__dirname + '/public'))

app.listen(port, () => console.log(`Servidor corriendo en puerto ${port}`));

app.get('/',(req,res)=>{
    res.sendFile(path.resolve(__dirname, './views/home.html'))
})

app.get('/ofertas',(req,res)=>{
    res.sendFile(path.resolve(__dirname, './views/ofertas.html'))
})

app.get('/tiendas-oficiales',(req,res)=>{
    res.sendFile(path.resolve(__dirname, './views/tiendas-oficiales.html'))
})

app.get('/vender',(req,res)=>{
    res.sendFile(path.resolve(__dirname, './views/vender.html'))
})

app.get('/ayuda',(req,res)=>{
    res.sendFile(path.resolve(__dirname, './views/ayuda.html'))
})

app.get('/crea-tu-cuenta',(req,res)=>{
    res.sendFile(path.resolve(__dirname, './views/crea-tu-cuenta.html'))
})

app.get('/ingresa',(req,res)=>{
    res.sendFile(path.resolve(__dirname, './views/ingresa.html'))
})

app.get('/mis-compras',(req,res)=>{
    res.sendFile(path.resolve(__dirname, './views/mis-compras.html'))
})
