// 회사,개발자 입장: event적을수록 좋음
// 유저 입장: event많을수록 좋음

// 이벤트는 줄이는데, 사용자에겐 똑같이 보일 수 없을까? 
// --> 이벤트 위임!

function click(event){
    // console.log(event)
    console.log(event.target)
    console.log(event.target.className);
    // // console.log("HI");
    // if(event.target.nodeName === "DIV"){
    //     console.log("BYE");
    // }
    if(event.target.className === "item1"){
        console.log("1");
    }
    else if(event.target.className === "item2"){
        console.log("2");
    }
    else{
        console.log("3");
    }
}

const body = document.querySelector("body");
console.log(body);

body.addEventListener('click', click);