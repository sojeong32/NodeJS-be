const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const bodyParser = require('body-parser')
const indexRouter = require('./routes/index')
require('dotenv').config()
const app = express()
const MONGODB_URI_PROD = process.env.MONGODB_URI_PROD
console.log('mongouri', MONGODB_URI_PROD)

app.use(bodyParser.json())
app.use(cors())
app.use('/api',indexRouter)

const mongoURI = MONGODB_URI_PROD;


// useNewUrlParser: mongodb주소가 옛날형식의 url말고도 요즘형식의 url도 잘 쓰게 도와달라는 것
mongoose.connect(mongoURI,{useNewUrlParser:true}).then(()=>{
    console.log('mongoose connected');
}).catch((err)=> {
    console.log('DB connection fail', err);
});

app.listen(5000,()=>{
    console.log('server on 5000')
})