//ex1

console.log(ssafy); //1
var ssafy = 1; //2
var ssafy2 = ssafy; //3
ssafy = 10; //4
console.log(ssafy); //5
console.log(ssafy2); //6

//undefined, 10, 1이 출력됨

//실제 실행순서
//var ssafy;
//var ssafy2;
//console.log(ssafy); //undefined
//ssafy = 1; -> undefined말고 다른 위치에 1 저장 먼저하고 ssafy를 다시 할당시킴
//ssafy2 = ssafy; ->pass by value,값에의한 복사 //ssafy2가 원래 가르키고있떤 undefined말고 다른메모리에 1 저장하고 거기에 ssafy2를 할당
//ssafy = 10;
//console.log(ssafy); //10
//console.lof(ssafy2); //1



//ex2
const arr = [1,2,3];
arr2 = arr;
arr[0] = "ssafy";
console.log(arr);
console.log(arr2);

//ssafy,2,3 / ssafy,2,3 둘다 이렇게 출력됨

//객체값은 pass by value가 아니라 pass by reference(참조값)로 이루어짐
//arr -> 0x00000001 이라는 주소값(참조값)이 할당되고있음
//0x00000001의 위치에 [1,2,3]이 들어있다.
//arr2 = arr는 arr2도 arr가 가르키는 주소값을 가지라는 의미


//재할당은
let a = 1;
a = 2;

//이거는 재할당이 아님, 주소는 그대로고 주소에 있는 값에가서 객체를 변경시키는 거기 때문에
const a = [1,2,3];
a[0] = 10;

//javascript의 90%는 object이고 object는 재할당이 없기 떄문에 js에서 95%는 const변수를 사용한다고 저번에 말한거임


