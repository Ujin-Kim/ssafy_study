function eat(){
    return new Promise((resolve, reject)=>{
        setTimeout(() => {
            resolve("먹어");
        }, 3000);
    });
}

async function wait(){
    console.log("기다려!!");
    const data = await eat(); //async붙인함수에 호출함수 부르려면 await하면됨
    console.log(data);
    console.log("잘했어");
}

wait();
//기다려 , 먹어, 잘했어 순으로 출력



async function wait2(){
    //에러찾는방법
    try{
        console.log("기다려!!");
        const data = await eat(); //async붙인함수에 호출함수 부르려면 await하면됨
        console.log(data);
        console.log("잘했어");
    }
    catch (error){
        console.log(error);
    }
}