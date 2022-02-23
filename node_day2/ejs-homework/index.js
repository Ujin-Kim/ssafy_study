const express = require('express');
const app = express();
const axios = require('axios');

app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.set('view engine', 'ejs');

app.get("/albums", async (req, res) => {
    try{ 
        const responseAll = await axios.get('https://jsonplaceholder.typicode.com/albums/');

        const count = responseAll.data.length;
        const page = Number(req.query.page);

        const response = await axios.get('https://jsonplaceholder.typicode.com/albums/',{
            params : {
                _start : page && page > 0 ? 6 * (page - 1) : 0,
                _limit:6,
            }
        });

        res.render('index', {data: response.data, page:page || 1, count:count});

    }catch(err){
        res.render('error');
    }
})


app.get("/albums/:id/photos", async (req, res) =>{
    const {id} = req.params;
    //console.log(req.params);
    const response = await axios.get(`https://jsonplaceholder.typicode.com/albums/${id}/photos`);
    res.render("detail",{
        post : response.data,
        post_id : id,
    })
})

app.listen(8000, () => console.log("8000번 서버 가동 중"));