function getData() {
    //비동기 통신 객체
    const httpRequest = new XMLHttpRequest(); 
    console.log(httpRequest);
    console.log(httpRequest.readyState); //->번호표가 아래처럼 나타남
    //0번은 request가 초기화 되지 않은 상태
    //1번은 서버의 연결이 완료된 Loading 상태
    //2번은 서버가 request를 받은 Loaded 상태
    //3번은 request를 처리하는 중인 상태
    //4번은 처리가 완료되어 응답할 준비가 된 상태 - DONE이라는 상수로 고정되어있다

    httpRequest.onreadystatechange = function (){
        console.log(httpRequest);
        console.log(httpRequest.readyState);

        if(httpRequest.readyState === httpRequest.DONE){
            if(httpRequest.status === 200 || httpRequest.status === 201){
                console.log(httpRequest.response);
            }
            else{
                console.log(httpRequest.responseText);
            }
        }
    };
    httpRequest.open('GET', 'https://jsonplaceholder.typicode.com/todos/'); //가데이터를 만들어둔 사이트
    httpRequest.send();
}

const data = getData();


//CRUD 기능을 사용하는게 REST API라고 한다