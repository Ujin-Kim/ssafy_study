// const a = "BTS|KFC|MC|BBQ";
// const array = a.split("|");

// console.log(array);

// for(let str of array){
//     console.log(str);
// }


//영화정보 변경하기
//cgv사이트에서 개발자도구로 실행해보면 됨

const movie_name = document.querySelector("#contents > div.wrap-movie-chart > div.sect-movie-chart > ol:nth-child(2) > li:nth-child(1) > div.box-contents > a > strong");
const rate = document.querySelector("#contents > div.wrap-movie-chart > div.sect-movie-chart > ol:nth-child(2) > li:nth-child(1) > div.box-contents > div > strong > span");
const ddate = document.querySelector("#contents > div.wrap-movie-chart > div.sect-movie-chart > ol:nth-child(2) > li:nth-child(1) > div.box-contents > span.txt-info > strong");

console.log("영화제목 : ", movie_name.textContent);
console.log("예매율 : ", rate.textContent);
console.log("개봉일 : ", ddate.innerText);
//date.innerText로 해야함

movie_name.textContent = "삼겹살과 그대라면";
rate.textContent = parseInt(rate.textContent) - 5;
ddate.textContent = "1985.07.07 개봉"

let img_3 = document.querySelector("#contents > div.wrap-movie-chart > div.sect-movie-chart > ol:nth-child(2) > li:nth-child(3) > div.box-image > a > span > img");
let url_3 = document.querySelector("#contents > div.wrap-movie-chart > div.sect-movie-chart > ol:nth-child(2) > li:nth-child(3) > div.box-image > a");
let text_3 = document.querySelectorAll("strong");

let img_1 = document.querySelector("#contents > div.wrap-movie-chart > div.sect-movie-chart > ol:nth-child(2) > li:nth-child(1) > div.box-image > a > span > img");
let url_1 = document.querySelector("#contents > div.wrap-movie-chart > div.sect-movie-chart > ol:nth-child(2) > li:nth-child(1) > div.box-image > a");
let text_1 = document.querySelectorAll("strong");

let tmp_img = img_3.textContent;
let tmp_url = url_3.textContent;
let tmp_text = text_3.textContent;
img_3.textContent = img_1.textContent;
url_3.textContent = url_1.textContent;
text_3.textContent = text_1.textContent;
img_1.textContent = tmp_img;
url_1.textContent = tmp_img;
text_1.textContent = tmp_img;

//////////////////textContent는 script와 style요소를 포함한 모든 요소의 콘텐츠를 가져온다.
//innerText는 사람이 읽을 수 있는 요소만 처리한다.
//ex)) display:none 아예 존재하지 않는것 공간 자체도 차지 X, visible:hidden 눈에는 보이지 않으나 존재하는 것의 차이