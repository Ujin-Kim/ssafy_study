let bucketLists = [
    {  
        id: 7,
        text: '여행가기',
        done: false
    },
    {
        id: 2,
        text: '치킨먹기',
        done: true
    },
    {
        id: 4,
        text: '코딩하기',
        done: false
    },
];

function getMaxId(){
    return bucketLists.length? Math.max(...bucketLists.map(bucketList => bucketList.id)) : 0
}

console.log(getMaxId());