const str = "KFCOCOBBQMINMINC";

//1번문제
alert(str.indexOf('C'));


//2번문제
const arr = [];
let a = -1;
while(1){
    a = str.indexOf('C', a + 1);
    if(a === -1) break;
    arr.push(a);
}
alert(arr);