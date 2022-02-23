const express = require("express");
//console.log(express);

const app = express();

const port = 8878;

app.get("/", (req, res) => {
    console.log(__dirname, __filename);
    try{
        return res.sendFile(__dirname + "./index.html")
    }catch(err){
        return res.send("404 NOT fOUND");
    }
})

app.get("/login", (req, res) => {
    console.log(__dirname, __filename);
    try{
        return res.sendFile(__dirname + "./login.html")
    }catch(err){
        return res.send("404 NOT fOUND");
    }
})

app.get("/signup", (req, res) => {
    console.log(__dirname, __filename);
    try{
        return res.sendFile(__dirname + "./signup.html")
    }catch(err){
        return res.send("404 NOT fOUND");
    }
})

app.listen(port,() =>{
    console.log(`이 앱은 ${port}번 포트로 실행되고 있습니다`);
})