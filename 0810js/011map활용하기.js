const arr = [1,2,3,4,5];
const Array = arr.map(e => e*e);
console.log(Array);

const arr2 = ["a","bcd", "ef", "g"];
const Array2 = arr2.map(e => e.length);
console.log(Array2);

//forEach는 전체를 돌려서 탐색만하는 것
//map은 전체를 돌려서 전체에 대한 새로운 배열을 만드는것
//filter는 전체를 돌려서 부분에 대한 새로운 배열을 만드는 것