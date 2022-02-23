/*
const item1 = document.querySelector(".item1");
const item2 = document.querySelector(".item2");
const item3 = document.querySelector(".item3");

// console.log(item1);
// console.log(item2);
// console.log(item3);

function click1(){
    console.log("HI1");
}
function click2(){
    console.log("HI2");
}
function click3(){
    console.log("HI3");
}

item1.addEventListener('click', click1);
item2.addEventListener('click', click2);
item3.addEventListener('click', click3);
//HI3 HI2 HI1 이렇게 출력됨
///이거는 이벤트 버블링과 캡처링이라는 것이다
//버블링은 발생한 타겟에서부터 부모까지 올라가서 doc까지 올라가는거, 
//캡처링은 doc에서 타겟까지 내려오는거: 반대로 출력되겠지 그럼
//버블링이 default임
*/

const item1 = document.querySelector(".item1");
const item2 = document.querySelector(".item2");
const item3 = document.querySelector(".item3");
function click(e){
    console.log(e)
    console.log(e.target)
    console.log("HI");
}

item1.addEventListener('click', click);
item2.addEventListener('click', click);
item3.addEventListener('click', click);
