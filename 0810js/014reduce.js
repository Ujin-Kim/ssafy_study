const arr = [1,2,3,4,5];

const test = arr.reduce((acc, cur) => acc + cur);
console.log(test);

const str = ["h", "e", "l", "l", "o"];
const t = str.reduce((acc, cur) => acc + cur);
console.log(t);



const test2 = arr.reduce((acc, cur) => {
    if(cur == 2){
        acc.push(cur);
    }
    return acc;
}, []);

