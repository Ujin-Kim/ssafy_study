const express = require('express');
const app = express();

app.use(express.urlencoded({extended:false}));
app.use(express.json());

//ejs세팅
app.set('view engine', 'ejs'); //view engine으로 ejs를 설정하겠따는 말
app.get('/', (req, res) => {
    //index.ejs에서 다루기
    //res.render('index'); //index.ejs의미

    //서버에서 ejs에 데이터 넘겨주는 방법
    res.render("index", {data: [1,2,3,4,5,6,7,8,9,10]});
});

app.listen(8888,  () => console.log('8888서버 가동중'))