const bucketLists = [
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

function getValues(key){
    //const res = bucketLists.map(bucketList => bucketList.key); //이거는안댐
    const res = bucketLists.map(bucketList => bucketList[key]); 
    return res;
}

console.log(getValues('id'));
console.log(getValues('text'));
console.log(getValues('done'));