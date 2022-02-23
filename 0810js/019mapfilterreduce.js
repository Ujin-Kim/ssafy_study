const orderList = [
    {
        menu : "치킨",
        price: 17000,
        event:false,
        count: 50
    },
    {
        menu : "돈까스",
        price: 8500,
        event: true,
        count: 99
    },
    {
        menu : "마라탕",
        price: 8000,
        event:false,
        count: 100
    },
    {
        menu : "쫄면",
        price: 6500,
        event:false,
        count: 0
    },
    {
        menu : "짜장면",
        price: 5500,
        event: true,
        count: 30
    },
    
];

let menuList = orderList.filter(e => e.count > 0);
console.log(menuList);

//reduce 사용
menuList = menuList.reduce((acc, cur) => {
    if(cur.event === true){
       cur["saledPrice"] = cur.price * 0.9;
    }
    return acc;
}, menuList);
console.log(menuList);




//강사코드

const result = menuList.map(e => {
    if(e.event == true){
        e.saledPrice = e.price * 0.9;
    }
    return e;
})
console.log(result);

const result2 = orderList.reduce((acc, cur) => {
    if(cur.count){
        if(cur.event){
            cur.saledPrice = cur.price * 0.9;
        }
        acc.push(cur);
    }
    return acc;
}, []);
console.log(result2);