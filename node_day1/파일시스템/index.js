//일반버전
// const fs = require("fs")
// // fs라는 모듈로부터 거기서 내보내는 객체를 가지고 와서 fs라는 변수에 담아둔다.

// fs.readFile("./content.txt", (err, data) => {
//     if(err){
//         throw err;
//     }

//     console.log(data);
//     console.log(data.toString());
// })


//promise버전
const fs = require("fs").promises;

fs.readFile("./content.txt").then(data => {
    console.log(data);
    console.log(data.toString());
}).catch(err => console.log(err))