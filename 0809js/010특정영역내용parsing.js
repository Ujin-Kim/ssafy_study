let str = "ABCDEF[1599]AAQ";

let a = str.indexOf("[");
let b = str.indexOf("]");

let res = str.substring(a+1, b);
let result = Number(res) + 1;

alert(result);