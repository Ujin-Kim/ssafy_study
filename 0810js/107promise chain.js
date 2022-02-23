function plus(){
    return new Promise(function (resolve, reject) {
        resolve(0);
    });
}

plus()
.then((sum) => {
    return sum + 1;
})
.then((sum) => {
    return sum + 2;
})
.then((sum) => {
    return sum + 3;
})
.then((sum) => {
    return sum + 4;
})
.then((sum) => {
    return sum + 5;
})
.then((sum) => {
    console.log(sum);
})


//어떤 결과가 나왔을때 연결해서 그 결과 다음에 또 동작하고 연결 연결