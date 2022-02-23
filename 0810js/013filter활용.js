const arr = [1,2,3,4,5,6,7,8,9,10];

const arr1 = arr.filter(element => element%2 === 1);
const findarr = arr.find(element => element%2 === 1);
console.log(arr1);
//find/findIndex는 제일 처음값만 가져오기때문에 이런경우 ㄴㄴ
console.log(findarr);

const arr2 = arr.filter(element => 3 < element && element< 9);
console.log(arr2);



//본인의 버킷리스트를 작성하고 done속성이 false인 객체들만 새로운 Array에 저장후, array출력하기
const bucketList = [
    {
        id: 1, 
        text: "취직하기", 
        done : false
    },
    {
        id: 2, 
        text: "미국여행가기", 
        done : true
    },
    {
        id: 1, 
        text: "1억5천 30살까지 모으기", 
        done : false
    }
];

const notyet = bucketList.filter(e => e.done === false);
console.log(notyet);