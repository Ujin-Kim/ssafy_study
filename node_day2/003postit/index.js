const express = require('express');
const app = express();
const axios = require('axios');

app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.set('view engine', 'ejs');

//app.get('/') 이거 안해서 => cannot get 이라고 화면에 뜸
//async사용하면 trycatch로 오류잡는다
app.get("/posts", async (req, res) => {
    try{ //정상 렌더링
        //이거는 전부다 가져오는거
        const responseAll = await axios.get('https://jsonplaceholder.typicode.com/posts/');
        //console.log(responseAll);
        //console.log(responseAll.data);
        //console.log(responseAll.data.length);

        //페이지네이션 하는중
        const count = responseAll.data.length;
        const page = Number(req.query.page);
        // console.log(page);

        //일부만 가져오기(6개씩짤라서)
        const response = await axios.get('https://jsonplaceholder.typicode.com/posts/',{
            params : {
                // start속성에서 page가 있으면 페이지의 값을 _start에 넣고, 없으면 페이지가 양수인지 확인한다.그리고 임의로 설정 (음수를 막기위함)
                //start시작 순서대로 차근차근 받아온다
                //limit : 6개 단위로 끊어서
                _start : page && page > 0 ? 6 * (page - 1) : 0,
                _limit:6,
            }
        });
        //페이지네이션 끝

        //비구조 할당
        // const {data} = await axios.get('https://jsonplaceholder.typicode.com/posts/');
        // res.render('index', { data });

        res.render('index', {data: response.data, page:page || 1, count:count});

    }catch(err){ //에러가발생할 경우 error페이지 렌더링
        res.render('error'); //error.ejs를 그려준다
    }
})

app.get("/posts/:id", async (req, res) =>{
    const {id} = req.params;
    const response = await axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`);
    res.render("detail",{
        post : response.data
    })
})

app.listen(8000, () => console.log("8000번 서버 가동 중"));