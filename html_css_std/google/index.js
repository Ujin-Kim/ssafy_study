let toggleButton = document.querySelector(".toggle-button");
let bodyBackground = document.querySelector(".body-background");
let headerNav = document.querySelector(".header-nav-list-wrapper");

let searchInput = document.querySelector(".search-input");

toggleButton.addEventListener("click", function(){
    toggleButton.innerHTML = "다크 모드";
    toggleButton.classList.toggle("toggle-button-darkmode");
    bodyBackground.classList.toggle("body-background-darkmode");

    if(toggleButton.classList.contains("toggle-button-darkmode")){
        toggleButton.innerHTML = "일반 모드";
    }

    //nav글씨색상변경
    headerNav.classList.toggle("text-darkmode");

    let bookmarkTexts = document.querySelectorAll(".bookmark-text");
    let imgIconWrappers = document.querySelectorAll(".img-icon-wrapper");

    //북마크 글씨 색상 변경
    for(let i = 0; i < bookmarkTexts.length; i++){
        bookmarkTexts[i].classList.toggle("text-darkmode");
    }

    //북마크 아이콘 배경 색 white로
    for(let i = 0; i < imgIconWrappers.length; i++){
        imgIconWrappers[i].classList.toggle("img-icon-wrapper-darkmode");
    }
})

searchInput.addEventListener("keyup", function(e){
    if(e.code === "Enter"){
        if(e.target.value === ""){
            alert("검색어를 입력하지 않으셨습니다.");
            return;
        }
        alert(e.target.value + "검색했습니다.");
        // console.log(window); //
        window.open(`https://www.google.com/search?q=${e.target.value}`, "_blank"); //새로운브라우저를 열라는 메소드
        //ㄴtemplete literal 문법 이라고 한다.
        //원래는 ""+e.target.value 이런식으로 했어야 하는데
    }
})


//추가하기 버튼 구현
const bookmakrPlus = document.querySelector(".bookmark-plus");
bookmakrPlus.addEventListener("click", function(){
    const bookmarkItem = document.querySelectorAll(".bookmark-item");
    //console.log(bookmarkItem);
    const item = bookmarkItem[bookmarkItem.length - 1];
    const clone = item.cloneNode(true); //위에꺼 똑같은거 복제하는 코드
    item.after(clone);
})