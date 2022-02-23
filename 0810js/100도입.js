function two(){
    console.log("2");
    for(let i = 0; i < 9999999999999999999999; i++){
        //얘가 다른함수(one)이 실행되는 걸 방해한다, 영향을 준다 : blocking
    }
}

function one(){
    two();
    console.log("1");
    //one자체는 되게 빨리 끝나는 작업
}

one();
two();

//자바스크립트의 특징: 싱글스레드 기반의 non blocking 언어

//타언어는 프로세스/스레드로 blocking같은 작업 잘 처리함
//이걸 다루는게 자바스크립트 엔진