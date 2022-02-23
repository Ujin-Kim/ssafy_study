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

//sort는 원본배열을 고친다. return 필요없음
function sortKey(key){
    bucketLists.sort((a,b) => {
        // if(a[key] > b[key]){
        //     return 1; //0보다크면 b를 a보다 낮은 인덱스로
        // }
        // else if(a[key] < b[key]){
        //     return -1; //0보다 작으면 a를 b보다 낮은 인덱스로
        // }
        // else{
        //     return 0; //0이면 변경안하고
        // }
    });
}



//sort는 원본배열을 고친다. return 필요없음
//세줄 한번에 돌리면 가장 마지막 done을 기준으로 돌아감
console.log(sortKey('id'));
//console.log(sortKey('text'));
//console.log(sortKey('done'));



const sort_example = [1,2,3,10];
sort_example.sort();
console.log(sort_example); //1,10,2,3 이렇게 배치됨

//그러니까 배열 정렬할 때
sort_example.sort((a, b)=> a-b);
//이런식으로 -를 사용해서 비교해야함



//