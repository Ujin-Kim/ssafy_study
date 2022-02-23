const arr = [1,2,3,4,5,6,7,8,9,10];

const result1 = arr.reduce((acc, cur) => {
    //let c = cur.toString();
    if(cur%2 == 0){
        //acc[c] = "짝수";
        //acc.push("짝수");
        acc.push(`${cur} : 짝수`);
    }
    else{
        //acc[c] = "홀수";
        //acc.push("홀수");
        acc.push(`${cur} : 홀홀수`);
    }
    return acc;
}, []);

console.log(result1);


const data = ["BBQ", "BHC", "BBQ", "처갓집", ["굽네치킨", "푸라닭", "BBQ"], "굽네치킨"];
const newdata = data.reduce((acc, cur) => acc.concat(cur), []);
console.log(newdata);
const brand_cnt = newdata.reduce((acc, cur) => {
    if(acc[cur]){
        acc[cur]++;
    }
    else{
        acc[cur] = 1;
    }
    return acc;
}, {});

console.log(brand_cnt);