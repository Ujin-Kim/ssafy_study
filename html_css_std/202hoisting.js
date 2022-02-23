var a = 1;
// 이 문장은 변수 선언 var a; 와 할당 a = 1; 이라는 문장 두개가 이어진 것이다.
// 이거를 크롬 console창에 돌리면 undefined라고 나오는데, 
// 크롬에서, 표현식이 아닌 문은 언제나 undefined를 출력한다.

console.log(b)
var b = 1;
// 출력을 변수선언보다 먼저했다.
// undefined가 출력됨.

// js 자료형: 원시값, 객체값

// var a 를 하게 되면 a의 값을 할당할 메모리 자리에 먼저 undefined를 집어 넣어 둔다.
// a=1 값을 할당 할 때  1을 임시의 메모리 자리에 넣어두고 a가 가르키는 주소를 1이 들어있는 주소로 바꾸는 형태를 취한다.
// 원시값(6가지)를 출력할 때 이 방법을 사용한다.
// 그래서 출력을 변수선언과할당보다 먼저했을 때 변수 선언문이 호이스팅 되어서 undefined라고 나오게 되는 것.
// 이거를 변수 호이스팅이라고 한다. 이거는 var이라는 변수에서 나타난다.


// let에서는 변수 호이스팅이 동작하지 않는 것처럼 동작한다. 내부적으로는 동작한다.
console.log(c);
let c = 1;
//console창에 c is not defined라고 나옴
console.log(d);
const d = 1;
//console창에 cannot access 'd' before initialization. 이라고 나옴

//정리!!!!!
//- var
//1. 변수 호이스팅
//2. 함수레벨 스코프
//3. 암묵적 결합 = 중복선언 가능
//4. 생략 가능
//=> 이런 것들이 단점이라서 이것을 극복하기 위해 let과 const가 나오게 되었다.

//-let
//-const
//1. 변수 호이스팅이 발생하지 않는것처럼
//2. 블록레벨 스코프 = 변수의 유효 범위


//블록레벨 스코프 example
{
    let a = 'test';
    console.log(a);
}
//-> 잘 출력됨

{
    let a = 'test';
}
console.log(a);
//-> a is not defined 출력됨

{
    var b = 'test'
    console.log(b);
}
//출력 잘됨

{
    var b = 'test';
}
console.log(b);
// var에서는 블록을 벗어나도 잘 출력됨.



//4. 생략가능 example
a = 1;
console.log(a);
//let, const 변수를 사용하지 않으면 자동으로 var 변수로 저장됨



//3. 암묵적 결합 example = 중복 선언 가능
var a = 1;
var a = 2;
console.log(a);
//=> 2가 출력됨
//var a
//a = 1
//var a : 1에 참조를 끊어버리고 새로운 undefined 값에 a를 다시 참조한다. 1은 쓰레기값처럼 남아있음. 
//a = 2
//undefined 참조를 끊어버리고 2를 저장한 주소에 a를 다시 참조한다.




///////////////함수 선언식///////////////////
// :function 키워드를 쓴다. /////////////////
// : 함수 호이스팅이 발생한다.///////////////
function kfc(a,b){
    console.log("hello");
    return a+b;
}

let test = kfc(1,2);
console.log(typeof test);
console.log(typeof kfc);


/////////////함수 표현식///////////////////
///: 함수를 변수에 저장해서 저장된 변수가 호출되면, 해당 함수가 호출됨/////////////////
///: 변수 호이스팅이 발생한다.//////////////////////////////////////////////////////
///-> 표현식이 아닌 문장은 undefined가 출력된다고 했지!

let go = function(){ console.log("hi") }
go();


function abc(){
    console.log("hi");
}
let bbc = abc();
bbc();

//이때는 함수 선언시 이름이 필요없다 어짜피 변수 이름이 있기 때문에
let run = function(){
    for(let i = 0; i < 3; i++){
        console.log('#');
    }
}
run();



////이 세개의 차이를 알아야한다 - 이해하고 넘어가자////////////

console.log(go);
let go = function(){ console.log("hi") }
//-> go is not defined.

go();
let go = function(){ console.log("hi") }
//-> go has already been declared

kfc(1,2);
function kfc(a,b){
    return a+b;
}
//-> 3 출력