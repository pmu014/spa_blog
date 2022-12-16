const express = require('express');
const app = express();
const port = 3000;
const indexRouter = require('./routes/index.js');
// const commentsRouter = require('./routes/comments.js');
const postsRouter = require('./routes/posts.js');

const connect = require("./schemas/");
connect(); 

app.use(express.json());

app.use('/api', [indexRouter, /*commentsRouter,*/postsRouter]);


app.post("/", (req,res) => {
  console.log(req.body);

  res.send("기본 URL에 POST메소드가 정상적으로 실행되었습니다.")
});

app.get('/', (req, res) => {
  console.log(req.query);

  res.json({
    'keykey' : 'value입니다',
    "이릅입니다.":'이름일까요?',
  });
});


app.listen(port, () => {
    console.log(port, '포트로 서버가 열렸어요!');
  });