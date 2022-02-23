// console.log(document);

//let vs const
//거의 대부분 const를 사용한다. 
//원시값 재할당이 필요한 경우에만 let을 사용하는 것으로 한다.


//queryselecctor없을때

const i = document.getElementById("i");
console.log(i);

const c = document.getElementsByClassName("c");
console.log(c);

//queryselector잇으니까
const a = document.querySelector("#i");
console.log(a);
const b = document.querySelector(".c");
console.log(b);


//html에 손안대는게 좋으니까 div.c 전에 글자넣고 싶으면 
//아래꺼 사용한다. 정적으로 dom트리에 추가할 수 있음
b.before("before");

const d = document.querySelector("#ol");
console.log(d);
d.after("end");


//innerHTML과 textcontent의 차이
let liFirst = document.createElement("li");
liFirst.innerHTML = "prepend";
d.prepend(liFirst);
liFirst = document.createElement("li");
liFirst.innerHTML = "append";
d.append(liFirst);