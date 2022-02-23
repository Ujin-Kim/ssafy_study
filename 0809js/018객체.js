let obj = {};

//obj의 아빠 찾아가는거
console.log(obj.__proto__);

//엄마한테 바로 접촉 XX, 아빠 거쳐서 가야함
console.log(obj.__proto__.constuctor);

//obj에 속성 넣었음
obj.eyes = "bad";

//만약 아빠한테 eyes = bad하면 나말고 내 형제한테도 상속됨
obj.__proto__.eyes = "bad";

console.log(obj.__proto__.__proto__.__proto__)
//이때 null이 나왔다
//모든 객체는 부모를 가지며