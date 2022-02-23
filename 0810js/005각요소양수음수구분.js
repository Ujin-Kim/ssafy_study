let arr = [-5,3,4,2,-7,-2,7];
let pplus = [];
let mminus = [];
//const mminus = new Array();

arr.forEach((e)=>{
    if(e > 0) pplus.push(e);
    else if(e < 0) mminus.push(e);
});

console.log(pplus);
console.log(mminus);