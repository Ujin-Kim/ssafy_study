const http = require("http");
//console.log(http);

//실행할때 주의할점 : 통합터미널에서 실행


//서버를 만든다
const server = http.createServer((request, response) => {
    //응답에 대한 정보를 기록하는 메서드
    response.writeHead(200, "text/html: charset=utf-8"); //헤드작성

    //클라이언트로 보낼 데이터
    response.write("<h1>Hello, world!</h1>"); //body작성

    //응답을 종료할 메서드
    response.end("<p>bye server</p>");
})

//서버를 켠다
server.listen(8888, () => {
    console.log("서버 잘 켜짐");
}) //(port num, callback함수)

//browser에 localhost:8888을 입력한다.
//서버가 켜져있는동안 접근 가능