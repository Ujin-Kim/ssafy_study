let arr = [1, 2, 3, 4, 5];

for(let i = 0; i < arr.length; i++){
    console.log(arr[i]);
}

let arr = [1, 2, 3, 1, 2, 3, 1, 2, 3];
let cnt = 0;
for(let i = 0; i < arr.length; i++){
    if(arr[i] === 1) cnt++;
}
console.log(cnt);


let ary = ['A', 'E', 'W', 'Q', 'A'];
let flag = 1;
for(let j = 0; j < ary.length; j++){
    if(ary[j] === 'A'){
        console.log('O');
        flag = 0;
        break;
    }
}
if(flag === 1) console.log('X');

// 단축키 정리
// <!-- 다중 커서 Ctrl + Alt 방향키 위/아래로 -->
// <!--  다중 선택 Ctrl + D -->
// <!-- 전체검색 Ctrl + Shift + f -->
// <!-- 파일 별 검색 Ctrl + P  -->
// 뒤로: ctrl + z, 앞으로: ctrl + y