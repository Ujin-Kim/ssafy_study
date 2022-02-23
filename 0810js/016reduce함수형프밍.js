const increment = input => input + 1;
const decrement = input => input -1;
const squared = input => input * input;
const half = input => input/2;

const initValue = 1;

const pipeLine = [increment, squared, increment, half, decrement, increment];
const result = pipeLine.reduce((acc, cur) => cur(acc), initValue);
console.log(result);



//          acc             cur             결과값
//1R         1           increment           2
//2R        2           squared             4
//3R        4           increment           5
// ........................................
