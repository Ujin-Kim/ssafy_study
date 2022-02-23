const express = require('express');
const app = express();
const port = 8881;

app.use((req, res, next) => {
    req.a = 30;
    next();
})

const otherMiddleware = (req, res, next) => {
    req.b = 15;
    next();
}

app.get('/', (req, res) => {
    console.log(req.a);
    return res.json({a:req.a});
})

app.get('/add', (req, res) => {
    const a = req.a + req.a;
    return res.json({a});
})

app.get('/sub', (req, res) => {
    const a = req.a - 1;
    return res.json({a});
})

app.get('/multi', (req, res) => {
    const a = req.a * req.a;
    return res.json({a});
})

app.get('/other', otherMiddleware, (req, res) => {
    const sum = req.a + req.b;
    return res.json({a:sum});
})

app.listen((port, () => {
    console.log(`this app listening ${port}`)
}))