console.log("어서오세요");
console.log("주문하세요");
console.log("저는 주문할것 고르시는 동안 다른일좀하고있겠습니다");

const pro = new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log('저 주문할게요');
        resolve('치킨');
        //reject('추천좀');
    }, 5000);
});

pro.then((data) => {
    console.log(data);
    //console.log('GOOD');

    console.log('사이즈는 어떻게 ');
    
})
.then((data) => {
    console.log(data);
    console.log('GOOD');
    
})//promise chaining
.catch((data) => {
    console.log(data);
    console.log('OH NO');
});

console.log('서빙서빙서빙');