const express=require("express");
const app = express();
const axios = require("axios");
//postman에서 body 데이터 보낼 때, 해석
app.use(express.urlencoded({extended : false}));
app.use(express.json());

//ejs 세팅
app.set('view engine','ejs');

app.get('/albums',async(req,res)=>{
    try{
        //정상 렌더링
        const responseAll = await axios.get('https://jsonplaceholder.typicode.com/albums/');
        //console.log(responseAll);
        const count = responseAll.data.length;
        const page = Number(req.query.page);
    
        const response = await axios.get('https://jsonplaceholder.typicode.com/albums/',{params:{
            _start : page && page>0 ? 6 * (page-1) : 0,
            //페이지 변수의 값이 있으면 페이지의 값을 _start에 넣고, 없으면 양수인지 확인
            _limit : 6,
            
        }});
        res.render('index',{data:response.data,page : page || 1, count : count});
    }
    catch(err){
        //error발생
        res.render('error');
    }
})

app.get("/albums/:id/photos",async(req,res)=>{
    const {id} = req.params;
    const response = await axios.get(`https://jsonplaceholder.typicode.com/albums/${id}/photos`);
    console.log(response);
    res.render("detail",{
        albums : response.data,
        p_id : id
    })
})

app.listen(8002,()=>{console.log("8002번 포트 사용중")});