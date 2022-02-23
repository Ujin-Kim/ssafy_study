let str = "BTSBTSMINBTS";

let result = str.replace(/TS/g, "CO");
//"TS"-global 전체를 찾아서 CO로 바꿔라 : 정규식 표현
alert(result);

//=> 결과: BCOBCOMINBCO