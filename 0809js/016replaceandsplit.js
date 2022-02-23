let str = "bts@macdonald.co.kr||inho@mincoding.co.kr||jason@jyp.com";
str = str.replace(/co.kr|com/g, "net");
let arr = str.split("||");

let idArr = [];
for(let i = 0; i < arr.length; i++){
    let index = arr[i].indexOf("@");
    let id = arr[i].substring(0, index);
    idArr.push(id);
}

console.log(idArr);