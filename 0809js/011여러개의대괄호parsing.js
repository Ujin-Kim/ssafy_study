let str = "AB[100]T[41]ABS[1][5]BTS";


let a = -1;
let b = -1;
let sum = 0;

while(1){
    a = str.indexOf('[',b+1);
    if(a === -1) break;
    b = str.indexOf(']', a+1);
    if(b === -1) break;

    let res = str.substring(a+1,b);
    sum += Number(res);
}

alert(sum);