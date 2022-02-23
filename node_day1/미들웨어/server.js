const express = require("express");
const app = express();
const port = 8989;

//express server에서 사용한다는 의미
//항상 동작함
//전체에서 도는 코드를 쓸 때 app.use를 쓴다
//특정 http메서드에서만 사용되는 것을 app.get, app.post
app.use((req, res, next) =>{
    console.log("동작합니다");
    req.aa = "aa"
    next();
})

const textMiddleware = (req, res, next) => {
    console.log("특정 부분에서만 동작합니다")
    req.aa = "aa";
    next();
}

app.get("/", (req, res) => {
    console.log(__dirname, __filename);
    try{
        return res.sendFile(__dirname + "/views/index.html")
    }catch(err){
        return res.send("404 NOT fOUND");
    }
})

app.get("/hello", textMiddleware, (req, res) => {
    if(req.aa){
        console.log(req.aa)
    }
    return res.json({hello: "hello"})
})
app.listen(port, () => {
    console.log(`${port}에서 실행중`);
})

//미들웨어 사용하는 이유

//미들웨어 콜백함수 개수 제한은 없나요? 계속 next로 타고 넘어갈 수 있는건가요?