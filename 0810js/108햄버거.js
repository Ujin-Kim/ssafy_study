function hamburger(){
    return new Promise((resolve, reject) => {
            setTimeout(()=>{
                resolve("");
            }, 3000);
    });
}

hamburger().then((result) => {
    console.log(result);
    return result + "참깨빵위에";
})
.catch(()=>{ //reject되면
    console.log("빵 부족!");
})
.then((result) => { //resolve되면
    console.log(result);
    return result + " 순쇠고기 패티 2장";
})
.catch(()=>{
    console.log("패티 부족!");
})
.then((result) => {
    console.log(result);
    return result + " 특별한소스";
})
.catch(()=>{
    console.log("소스 부족!");
})
.then((result) => {
    console.log(result);
    return result + "양상추";
})
.then((result) => {
    console.log(result);
    return result + "치즈 피클 양파까지";
})
.then((result) => {
    console.log(result);
})
