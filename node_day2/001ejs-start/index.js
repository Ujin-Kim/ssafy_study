const express = require('express');
const app = express();

//urlencoded - postname에서 body데이터 보낼때 해석할 때 사용한다.
app.use(express.urlencoded({extended:false}));
app.use(express.json());

//ejs세팅
app.set('view engine', 'ejs');
app.get('/', (req, res) => {
    //index.ejs에서 다루기
    //res.render('index'); //index.ejs의미

    //서버에서 ejs에 데이터 넘겨주는 방법
    res.render("index", {data: "서버에서 넘겨준 데이터"});
});

app.listen(8000, () => console.log('8000번 서버 가동중'));

// 기존에 node 서버는 껐다가 켜야하는 불편함이 있었다
// nodemon -> 자동 리로드 라이브러리 (서버측 데이터가 변경되면 자동으로 리로드, views는 감지가 안될 수 도 있음, 감지가 안되면 새로고침 하면됨)
// npx nodemon index.js (만약에 이게 안되면 npm i nodemon후 다시 npx nodemon index)