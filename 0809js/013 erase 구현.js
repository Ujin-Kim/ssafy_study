function erase(str, start, size){
    let a = str.substring(0, start);
    let b = str.substring(start + size);

    return a + b;
}

let str = "ABCD123123EFG";
let result = erase(str, 4, 6);
alert(result);