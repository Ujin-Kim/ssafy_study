const myTime = (time, ingredient) =>{
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(ingredient);
        }, time);
    })
}

async function test(){
    try{
        console.log(await myTime(1000, "참깨빵 위에"));
        console.log(await myTime(2000, "순쇠고기 패티 2장"));
        console.log(await myTime(3000, "특별한 소스"));
        console.log(await myTime(4000, "양상추"));
        console.log(await myTime(5000, "치즈 피클 양파까지"));
    }
    catch{
        console.log(err);
    }
}

test();