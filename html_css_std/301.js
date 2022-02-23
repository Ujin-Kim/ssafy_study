const id = document.querySelector(".id");
const password = document.querySelector(".password");
const button = document.querySelector(".signup");

button.addEventListener("click", function(){
    if(id.value && password.value){
        alert("회원가입이 완료되었습니다.");
    }
    else{
        if(!id.value){
            alert("id를 입력해주세요");
        }
        if(!password.value){
            alert("password를 입력해주세요");
        }
    }
})