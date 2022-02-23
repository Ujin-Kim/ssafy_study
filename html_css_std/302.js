const id = document.querySelector(".id");
const pw = document.querySelector(".password");
const pw_check = document.querySelector(".check");
const btn = document.querySelector(".ok");
const pw_status = document.querySelector(".password-status");
const agree = document.querySelector(".agree");

pw_check.addEventListener("keyup",function(e){
    if(e.target.value === pw.value){
        pw_status.textContent = "비밀번호가 일치합니다.";
    }
    else{
        pw_status.textContent = "비밀번호가 일치하지 않습니다.";
    }
})

btn.addEventListener("click",function(e){
    if(id.value && pw.value && pw_check.value && agree.checked){
        if(pw.value === pw_check.value){
            alert("회원가입이 완료되었습니다.");
        }
        else{
            alert("비밀번호가 서로 일치하지 않습니다.");
        }
    }
    else{
        if(!id.value){
            alert("id를 입력해주세요");
        }
        else if(!pw.value || !pw_check.value){
            alert("password를 입력해주세요");
        }
        else if(!agree.checked){
            alert("개인정보 이용동의를 체크해주세요.");
        }
    }
})