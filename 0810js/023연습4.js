let bucketLists = [
    {  
        id: 3,
        text: '여행가기',
        done: false
    },
    {
        id: 2,
        text: '치킨먹기',
        done: true
    },
    {
        id: 1,
        text: '코딩하기',
        done: false
    },
];

function addList(List){

    //const라면
    //bucketLists.push(List); -> 이거하면 4가 제일 밑으로 들어가서 문제의도와 약간 다름
    //원본을 변경하는 의미가 있음
    //bucketLists.unshift(List); = >이렇게하면 4가 제일위로 올라가서 괜찮
        

    //let이기때문에
    //지금까지 배운거는 배열에 대한 메소드였끼 떄문에 객체에 바로 넣을 수 없엉, let이라서 재할당할 수 있어서 밑에 처럼 한거임
    bucketLists = [List].concat(bucketLists);
}

addList({id:4, content:'요리하기', completed: true});
console.log(bucketLists);
