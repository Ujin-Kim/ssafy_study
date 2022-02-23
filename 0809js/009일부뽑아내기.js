let str = "";
for(let j = 0; j < 2; j++){
    for(let i = 1; i <= 9; i++){
        str += i;
    }
}

let i1 = prompt("input1");
let i2 = prompt("input2");

let a = str.indexOf(i1);
let b = str.indexOf(i2, a+1);

let result = str.substring(a, b + 1);

alert(result);