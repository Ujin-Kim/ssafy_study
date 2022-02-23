let a = "ABCABCMCABCACMCBBQABC";
let b = -1;
let cnt = 0;
while(1){
    b = a.indexOf("ABC", b+1);
    if(b === -1) break;
    cnt++;
}

alert(cnt);