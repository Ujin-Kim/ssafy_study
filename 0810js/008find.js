const array = [1,2,3,4,5];

console.log(array.find(element => element > 4)); //값을 바로 찾아냄, 없으면 undefined
console.log(array.findIndex(element => element > 4)); //원소의 위치를 알려줌, 없으면 -1반환

// find : 배열을 순회하면서 조건에 해당되는 "첫번째" 값을 찾는다.
// findIndex : 배열을 순회하면서 조건에 해당되는 "첫번째" 인덱스를 찾는다.

//json이 이런형태로 되어있음
const test = [
    {name: 'kim', job : 'programmer'},
    {name: 'lim', job : 'cook'},
    {name: 'jung', job : 'student'},
];

console.log(test.find(el => el.name === "kim"));
console.log(test.findIndex(el => el.name === "kim"));


//객체자체를 순회하는 메서드가 없고 배열안에 객체를 넣으면 객체를 다루기가 쉽기 때문에 집어넣는다
//배열의 정의 : 같은 자료형들의 연속된 집합
//객체의 정의 : 키:값 으로 이루어진 다양한 자료형들의 집합

