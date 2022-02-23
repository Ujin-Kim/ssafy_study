
const url = "https://jsonplaceholder.typicode.com/todos/";
//err하려면
//const url = "https://jsonplaceholder.typicode.com";


//1.
fetch(url)
.then(res => res.json())
.then((res)=>console.log(res));

// (async function () {
//     try{
//         const fetchData = await fetch(url);
//         console.log(fetchData);
//         //1.이랑 비슷한 값이 나오게
//         const data = await fetchData.json();
//         console.log(data)
//         //3.
//         document.querySelector("body").insertAdjacentHTML("beforeend", JSON.stringify(data));
//         //JSON.stringify <=> JSON.parse
//     }
//     catch(err){
//         console.log(err);
//         document.querySelector("body").textContent = "데이터를 가져올 수 없습니다";
//     }
// })();//한번만 바로 실행하라는 뜻