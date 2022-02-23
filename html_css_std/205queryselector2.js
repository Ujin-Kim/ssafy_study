const h1= document.querySelector("h1");
//태그로도 가져올 수 있다
console.log(h1);


// querySelector는 가장 먼저 찾게되는 하나만 가져온다
// querySelectorAll은 페이지 전체에 있는 걸 가져온다.
const h2 = document.querySelectorAll("h1");
console.log(h2);


const a = document.querySelector("h1").innerText;
console.log(a);


// const linkText = document.querySelector("a[href]");
const linkText = document.querySelector("a");
console.log(linkText);
//링크형태로도 가져올 수 있다.

// linkText.innerText = "BBQ WORLD";
linkText.textContent = "BBQ WORLD";

//linkText->BBQ WOLRD로 바뀐다

//js원시타입(6가지)과 객체타입(90%이상)이 있다
//let은 원시타입의 재할당이 일어날때만 사용한다
//그래서 5%..정도만 쓴다고 생각하면됨
//for문도 잘안쓸거고 고차원배열함수 쓸거임
//원시타입 ㅇ여섯개: string, number, bigint, boolean, undefined, symbol


//queryselector와 elementBy로 가져오는 것의 차이
//:쿼리셀렉터는 id, class전체를 봐야하는데 getElement는 특정 범주만 검색해서

const gg = document.createElement("h1");
gg.id = "yaya";
gg.textContent = "yayaya";
linkText.after(gg);


const find_yayaya = document.getElementById("yaya");
console.log(find_yayaya);
const find_yaya = document.querySelector("#yaya");
console.log(find_yaya);


const qq = document.getElementById("test");
console.log(qq);
const zz = document.querySelector("#test");
console.log(zz);