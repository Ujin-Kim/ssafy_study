const input1 = document.querySelector(".input1");
const result1 = document.querySelector(".result1");

// console.log(input1);
// console.log(result1);

input1.addEventListener("keydown", function(e){
    console.log(e.target.value);
    result1.textContent = e.target.value;
})

const input2 = document.querySelector(".input2");
const result2 = document.querySelector(".result2");

input2.addEventListener("keyup", function(e){
    console.log(e.target.value);
    result2.textContent = e.target.value;
})