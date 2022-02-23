let searchInput = document.querySelector(".search-input");

searchInput.addEventListener("keyup", function(e){
    if(e.code === "Enter"){
        if(e.target.value === ""){
            alert("검색어를 입력하지 않으셨습니다.");
            return;
        }
        alert(e.target.value + "검색했습니다.");
        window.open(`https://search.naver.com/search.naver?where=nexearch&sm=top_hty&fbm=1&ie=utf8&query=${e.target.value}`, "_blank");
    }
})


//추가하기 버튼 구현
const bookmakrPlus = document.querySelector(".bookmark-plus");
bookmakrPlus.addEventListener("click", function(){
    const bookmarkItem = document.querySelectorAll(".bookmark-item");
    const item = bookmarkItem[bookmarkItem.length - 1];
    const clone = item.cloneNode(true); 
    item.after(clone);
})
