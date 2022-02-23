const http = require('http');
const fs = require("fs").promises;
//시점조절을한거임 걍 promise하면 언제 불러와질지몰라서 await까지 써줘야오류안남

const port = 8889;

const server = http.createServer(async (req, res) => {
    try{
        const data = await fs.readFile("./index.html");
        res.writeHead(200, {"Content-Type" : "text/html; charset=utf-8" });
        res.end(data);
    }
    catch(err){
        const data = await fs.readFile("./index.html");
        res.writeHead(200, {"Content-Type" : "text/html; charset=utf-8" });
        res.end(err.messsage);
    }
});

server.listen(port, ()=>{
    console.log(`${port}번 포트 사용중`);
})