let arr = [4,3,5,1,6,5];
let cnt = 0;

// let f = function(val){
//     if(val % 2 == 1) cnt++;
// }

arr.forEach(e => {
    if(e % 2 == 1) cnt++;
});
console.log(cnt);



// js에서 "함수 호출 방식"(함수를 어떻게 호출하느냐에 따라) this 바인딩이 결정된다.
// 화살표 함수와 일반 함수의 this바인딩은 다르다
// 1.일반함수호출 : 전역 객체에 바인딩이 된다.(this === window) : 브라우저는 window, node는 global
// 2.메소드호출 : 메소드는 hero.fly()처럼 앞에 객체명.으로시작한다.
//       ㄴ 메소드를 소유한 객체에 바인딩 된다. 여기서 this === hero임