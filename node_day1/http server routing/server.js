const http = require('http');
const fs = require('fs').promises;

const port = 8895;

const server = http.createServer(async (req, res) => {
    console.log(req.method);
    console.log(req.url);
    try{
        console.log(req.method);
        console.log(req.url);
        if(req.method === "GET"){
            if(req.url === "/"){
                const data = await fs.readFile("index.html");
                res.writeHead(200, {"Content-Type" : "text/html; charset=utf-8"})
                return res.end(data);
            } else if(req.url === "/a"){
                const data = await fs.readFile("a.html");
                res.writeHead(200, {"Content-Type" : "text/html; charset=utf-8"})
                return res.end(data);
            } else if(req.url === '/b'){
                const data = await fs.readFile("b.html");
                res.writeHead(200, {"Content-Type" : "text/html; charset=utf-8"})
                return res.end(data);
            }
        }
    }catch(err){
        console.log(err);
        res.writeHead(200, {"Content-Type" : "text/html; charset=utf-8"})
        res.end(err.message);
    }
})

server.listen(port, () => {console.log(`${port}번에서 실행중`)});