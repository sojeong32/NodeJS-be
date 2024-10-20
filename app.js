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

// Heroku 환경에서 동적 포트 사용
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`server on ${PORT}`);
});

// 1. 회원가입
// 유저가 이메일, 패스워드, 유저이름 입력해서 보냄
// 받은 정보 저장함(데이터베이스 모델 필요)
// 패스워드 암호화시켜서 저장

// 1. 라우터
// 2. 모델
// 3. 데이터를 저장(이미 가입된 유저 유무, 패스워드 암호화)
// 4. 응답을 보낸다.