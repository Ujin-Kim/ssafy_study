//중복된 배열을 찾아보자 reduce활용

const arr = ["홍길동", "신사임당", "임꺽정" , "홍길동", "임꺽정", "홍길동"];

const result = arr.reduce((acc, cur) => {
    if(acc[cur]){
        acc[cur]++;
    }
    else{
        acc[cur] = 1;
    }
    return acc;
}, []);

console.log(result);


//배열의 고차함수,, 라고하는걸 배우는중임

//       acc                            cur        만들어지는 것
//  1R   []                            홍길동      [홍길동:1]
//  2R   [홍길동:1]                   신사임당     [홍길동:1 신사임당:1]
//  3R   [홍길동:1, 신사임당:1]        임꺽정       [홍길동:1, 신사임당:1, 임꺽정:1]
//  4R   [홍길동:1, 신사임당:1, 임꺽정1] 홍길동      [홍길동:2, 신사임당:1, 임꺽정:1]
//  5R  [홍길동:2, 신사임당:1, 임꺽정:1] 임꺽정    [홍길동:2, 신사임당:1, 임꺽정:2]
//  6R [홍길동:2, 신사임당:1, 임꺽정:2]  홍길동     [홍길동:3, 신사임당:1, 임꺽정:2]
// last  [홍길동:3, 신사임당:1, 임꺽정:2]   X


//또는
const result1 = arr.reduce((acc, cur) =>{
    acc[cur] = (acc[cur]? acc[cur] : 0) + 1;
    return acc;
})

console.log(result1);




const data = ["삼겹살", "돈까스", ["마라탕", "삼겹살"]];
//["삼겹살", "돈까스", "마라탕", "삼겹살"] 이렇게 만들고싶어
const result2 = data.reduce((acc, cur) => acc.concat(cur), []);
//요새는 console.log(data.flat()); 이걸로 풀수잉ㅆ음