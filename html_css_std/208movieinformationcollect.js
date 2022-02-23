
//array에 제목가져오기 
const arr = document.querySelectorAll("strong[class=title]");
// const arr = document.querySelectorAll(".title");
for(let i of arr){
    console.log(i.textContent);
}

//모자이크
for(let i of arr){
    i.textContent = "****";
}

//예매율 30%씩 올리기
const rating = document.querySelectorAll(".percent span");
for(let i = 0; i < rating.length; i++){
    const splitForNum = rating[i].textContent.split("%")[0];
    rating[i].textContent = (Number(splitForNum) + 30) + "%";
}


//막간 퀴즈
console.log(0.1 + 0.2);
console.log((0.1 + 0.2) === 0.3);
//0.30000000000000004
//false
//101.11(2)를 10진수로 바꾸면 5.75 이건데, 
//0.2같은 경우, 2의 -1승, 2의 -2승, 2의 -3승 처럼 이런ㅅ수에 맞는수가 없어서 계산할때 약간 오류가 나기도한당!
