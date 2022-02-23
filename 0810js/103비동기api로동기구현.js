console.log('HI');

// setTimeout(() => {
//     console.log('First');
// }, 500);

// setTimeout(() => {
//     console.log('Second');
// }, 1000);

// setTimeout(() => {
//     console.log('Third');
// }, 2000);

//위에꺼는 두번째께 2000초고 세번째가 1000초면 순서 바뀜

setTimeout(() => {
    console.log('First');
    setTimeout(() => {
        console.log('Second');
        setTimeout(() => {
            console.log('Third');
        }, 2000);
    }, 1000);
}, 500);

//몇초든 순서바뀔일 없음