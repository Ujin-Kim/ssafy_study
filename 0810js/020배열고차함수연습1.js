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

function render(){
    let html='';


    //새로운 배열을 만들 필요가 없어서 forEach 사용
    bucketLists.forEach(bucketList => {
        html += `<li id="${bucketList.id}"><label>
            <input type="checkbox">${bucketList.text}</input></label></li>`;
    })
    
    return html;
}

console.log(render());



//for of 가 forEach보다 성능은 좋다