const express = require('express');
const app = express();
const axios = require('axios');

app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.set('view engine', 'ejs');

app.get("/albums", async (req, res) => {
  try {
    // 정상 렌더링
    const responseAll = await axios.get("https://jsonplaceholder.typicode.com/albums/");
    
    const count = responseAll.data.length;
    const page = Number(req.query.page);
    // console.log(page);

    const response = await axios.get("https://jsonplaceholder.typicode.com/albums/", {
      params : {
        // 페이지가 있으면 페이지의 값을 _start에 넣고, 없으면 페이지가 양수인지 확인
        _start : page && page > 0 ? 8 * (page - 1) : 0,
        _limit : 8,
      }
    });

    res.render('index', { data: response.data, page: page || 1, count: count });
  } catch(error) {
    // 에러가 발생할 경우 error 페이지 렌더링
    res.render('error');
  }
});

app.get("/albums/:id/photos", async (req, res) => {
  const {id} = req.params;
  const responseAll = await axios.get(`https://jsonplaceholder.typicode.com/albums/${id}/photos`);
  const count = responseAll.data.length;
  const page = Number(req.query.page);

  const response = await axios.get(`https://jsonplaceholder.typicode.com/albums/${id}/photos`, {
    params : {
      // 페이지가 있으면 페이지의 값을 _start에 넣고, 없으면 페이지가 양수인지 확인
      _start : page && page > 0 ? 8 * (page - 1) : 0,
      _limit : 8,
    }
  });

  res.render('detail', { data: response.data, page: page || 1, count: count });
})

app.listen(8888, () => {console.log('listening')});