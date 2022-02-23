function getData() {

    return new Promise(function (resolve, reject) {
        
        //비동기 통신 객체
        const httpRequest = new XMLHttpRequest(); 
        console.log(httpRequest);
        console.log(httpRequest.readyState);
    
        httpRequest.onreadystatechange = function (){
            console.log(httpRequest);
            console.log(httpRequest.readyState);
    
            if(httpRequest.readyState === httpRequest.DONE){
                if(httpRequest.status === 200 || httpRequest.status === 201){
                    resolve(httpRequest.response);
                }
                else{
                    reject("예외발생");
                }
            }
        };
        httpRequest.open('GET', 'https://jsonplaceholder.typicode.com/todos/'); 
        httpRequest.send();
    });
}

//비동기 통신을 Promise로
//const data = getData().then((data) => console.log(data));


//async/await버전
async function test(){ //외각의 함수에 async붙어서
    const data = await getData(); //getData를 비동기적으로 호출하겠다는 의미
    console.log(data);
}
test();

//똑같은거 즉시실행함수
// (async function test(){ //외각의 함수에 async붙어서
//     const data = await getData(); //getData를 비동기적으로 호출하겠다는 의미
//     console.log(data);
// })();




//비동기의 역사
//setTimeout(콜백헬) -> promise(then, then, then,,,) -> async/await (try/catch) -> generator나어쩌구같은게 더있음

//비동기 통신의 역사
//XMLHttpRequest(하나하나 일일히 statuscode, 이런걸 가져와서 통신) -> fetch -> axios