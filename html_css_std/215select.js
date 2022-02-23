const animal = document.querySelector(".animal");
const result = document.querySelector(".result");

animal.addEventListener("change", event);
function event(e){
    result.textContent = animal.value; // animal = e.target
    // result.textContent += e.target.innerText; 이거 왜안되냐면 e.target이 animal이기 때문이다!

    console.dir(animal.options[animal.selectedIndex].innerText);

    console.dir(e.target); //이걸로 e.target.이후에 뭐선택할지 정할 수 있음
    console.log(e.target.options[animal.selectedIndex].innerText);
}