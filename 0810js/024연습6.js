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

function toggle(id){
    bucketLists.map(bucketList =>{
        if(bucketList.id === id){
            bucketList.done = !bucketList.done;
        }
        return bucketList;
    })
}

toggle(2);

console.log(bucketLists);