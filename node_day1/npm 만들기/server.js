const express = require("express");
console.log(express);

const app = express();

const port = 8090;

app.get("/", (req, res) => {
    console.log(__dirname, __filename);
    try{
        return res.sendFile(__dirname + "/views/index.html")
    }catch(err){
        return res.send("404 NOT fOUND");
    }
})
app.get("/a", (req, res) => {
    console.log(__dirname, __filename);
    try{
        return res.sendFile(__dirname + "/views/a.html")
    }catch(err){
        return res.send("404 NOT fOUND");
    }
})

app.listen(port,() =>{
    console.log(`이 앱은 ${port}번 포트로 실행되고 있습니다`);
})

//npx nodemon server.js