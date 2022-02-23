const array = [1,2,3,4,5];
console.log(array.some(element => element > 4));
//하나만 충족해도 true

console.log(array.every(element => element > 1));
//모두 만족해야 true