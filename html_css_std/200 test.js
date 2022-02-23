// alert("Hello, world");

// var text = prompt("입력하세요");
// console.log(text);
// console.log(typeof text)

// for(let i = 10; i>=1; i--){
//     console.log(i);
// }

let a = 1;
while(a<=10){
    console.log(a);
    a++;
}

////////다음 세 문제를 구현할 것
//1. 숫자 2개를 입력받고 a~b까지 출력하기
let num = Number(prompt("첫번째 숫자"));
let num2 = Number(prompt("두번째 숫자"));
for(let i = num; i <= num2; i++){
    console.log(i);
}

//2.문자열 입력받고, BBQ 라면 1~30까지 합 출력, KFC라면 1~30까지 홀수 출력, 그외라면 "MOMS" 출력
let str = prompt("문자열을 입력하세요");
if(str === 'BBQ'){
    let res = 0;
    for(let i = 1; i < 31; i++){
        res += i;
    }
    console.log(res);
}
else if(str === "KFC"){
    for(let i = 1; i < 31; i++){
        if(i%2 === 1){
            console.log(i);
        }
    }
}
else{
    console.log("MOMS");
}

//3. 세 숫자 입력받고, if문으로 가장 큰 값을 출력하기
let n1 = Number(prompt("1st num"));
let n2 = Number(prompt("2nd num"));
let n3 = Number(prompt("3rd num"));
if(n1 >= n2 && n1 >= n3) console.log(n1);
else if(n2 >= n3 && n2 >= n1) console.log(n2);
else if(n3 >= n2 && n3 >= n1) console.log(n3);



//c언어 배열: 같은 자료구조의 연속된 모음
//js 배열: 유사 객체 , 배열이 아님 !

let a = [];
let arr = new array();
arr.push('1', 1);

//배열은 인덱스가 있어서 탐색에 유리하고, 객체는 삽입/삭제가 유리하다