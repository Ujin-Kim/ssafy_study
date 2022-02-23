//promise -> async, await로 발전

// const helloPromise = new Promise((resolve, reject) => {
//     console.dir(resolve);
//     console.dir(reject);
// });

// console.dir(Promise);

function promiseSetTimeout(){
    return new Promise((resolve, reject) => {
        setTimeout(() =>{
            resolve(1);
        }, 1000);
    });
}

promiseSetTimeout(1000).then(() =>{
    console.log("1초후 실행");
})

const promiseSetTimeoutReject = (time) =>{
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            reject(1);
        }, time);
    });
};

promiseSetTimeoutReject(1000).then(data => {
    console.log('fulfilled');
    console.log(data);
}).catch(data => {
    console.log('reject');
    console.log(data);
});