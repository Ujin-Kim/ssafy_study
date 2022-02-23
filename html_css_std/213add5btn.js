//for를 이용하여 5개의 button을 추가한다
//class이름을 지정한다.
//text이름은 버튼1~5를 한다.

// for(let i = 1; i <= 5; i++){
//     const body = document.querySelector("body");
//     const btn = document.createElement('button');
//     btn.setAttribute("class", "a");
//     const btn_t = document.createTextNode("버튼"+i);
//     btn.append(btn_t);
//     body.append(btn);
// }


//1.강사님 코드
const body = document.querySelector("body");
for(let i = 0; i < 5; i++){
    const button = document.createElement("button");
    button.innerText = "버튼" + (i+1);
    body.append(button);
}


//안녕 alrert 출력
//아무버튼이나 눌렀을 때 alert가 출력된다.
const push = document.querySelectorAll(".a");
for(let a of push){
    a.addEventListener('click',beep);
}
// push.addEventListener('click',beep);

function beep(){
    alert("안녕");
}


//안녕 버튼 n alert 출력
/*강사님 코드
const buttons = document.querySelectorAll("button");

for(let i = 0; i < buttons.length; i++){
    buttons[i].addEventListener('click', function(){ alert("안녕" + buttons[i].textContent);})
}*/


//이벤트 다섯개 안만들고 이벤트 하나로 버튼 다섯개를 정의해버렷다
//이게 이벤트 위임의 장점
body.addEventListener("click", function(event){
    if(event.target.nodeName === "BUTTON"){
        alert("안녕" + event.target.textContent);
    }
})



///e.srcElement와 e.target은 같은 역할을 함
//예전버전        현재버전    의 차이임
//크로스브라우징을 위해서
//var eventObject = (event.target)?event.target:event.srcElement;
//를 써주면 됨.
//22년 6월 15일부로 종료